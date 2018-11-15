import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import Web3Provider from '../src/Web3Provider';
import Component from './helpers/Component';
import { wait, getWrapper, getMount } from './helpers/utils';

let clock;
const { window } = global;

const web3_v0 = window.web3;

/**
 * We wrap all the tests in a function so we can run with web3 < 1.0 and again
 * with web3 >= 1.0
 */
function runTests(version) {
  describe('web3 ' + version, function() {
    describe('Web3Provider', function () {
      before(() => {

        if (version === 'v1') {
          window.web3 = window.web3_v1;
        } else {
          window.web3 = web3_v0;
        }

        clock = sinon.useFakeTimers();
      });
      after(() => {
        clock.restore();
      });
      afterEach(() => {
        window.web3.restore();
      });

      describe('Initial Mount', function () {
        it('should start an interval to fetch accounts', () => {
          const spy = sinon.spy(Web3Provider.prototype, 'fetchAccounts');
          const wrapper = mount(
            <Web3Provider>
              <div id="foo" />
            </Web3Provider>
          );

          expect(spy.callCount).to.equal(1);
          clock.tick(1000);
          expect(spy.callCount).to.be.above(1);
          spy.restore();
        });
        it('should start an interval to fetch network', () => {
          const spy = sinon.spy(Web3Provider.prototype, 'fetchNetwork');
          const wrapper = mount(
            <Web3Provider>
              <div id="foo" />
            </Web3Provider>
          );

          expect(spy.callCount).to.equal(1);
          clock.tick(60000);
          expect(spy.callCount).to.be.above(1);
          spy.restore();
        });

        it('should set context.accounts if available', async () => {
          window.web3.setAccounts(['0x987']);
          const wrapper = getMount();
          const instance = wrapper.instance();
          await instance.fetchAccounts()
          const ctx = wrapper.instance().getChildContext()

          expect(ctx.web3.selectedAccount).to.equal('0x987');
        });
      });

      describe('Polling', function () {
        it('Does not cause a state update if nothing changes', () => {
          const spy = sinon.spy(Web3Provider.prototype, 'setState');
          const wrapper = mount(
            <Web3Provider>
              <div id="foo" />
            </Web3Provider>
          );
          clock.tick(1000);
          const initialCallCount = spy.callCount;
          clock.tick(60000);
          expect(spy.callCount).to.be.eq(initialCallCount);
          spy.restore();
        });
      });

      describe('Redux Integration', function () {
        describe('When accounts becomes available', () => {
          it('dispatches an action', async () => {
            window.web3.setAccounts(['0x111']);
            const spy = sinon.spy();
            const wrapper = mount(
              <Web3Provider>
                <div id="foo" />
              </Web3Provider>,
              {
                context: {
                  store: {
                    dispatch: spy
                  }
                }
              }
            );
            await wrapper.instance().fetchAccounts()

            expect(spy.callCount).to.equal(1);
            sinon.assert.calledWith(spy, sinon.match({
              type: 'web3/RECEIVE_ACCOUNT',
              address: '0x111'
            }));
          })
        });
        describe('When switching between accounts', () => {
          it('dispatches an action', async () => {
            window.web3.setAccounts(['0x111']);
            const spy = sinon.spy();
            const wrapper = mount(
              <Web3Provider>
                <div id="foo" />
              </Web3Provider>,
              {
                context: {
                  store: {
                    dispatch: spy
                  }
                }
              }
            );

            // simulate changing account
            window.web3.setAccounts(['0x222']);
            await wrapper.instance().fetchAccounts()
            clock.tick(1500);

            sinon.assert.calledWith(spy, sinon.match({
              type: 'web3/CHANGE_ACCOUNT',
              address: '0x222'
            }));
          })
        });

        describe('When logging out', () => {
          it('dispatches an action', async () => {
            window.web3.setAccounts(['0x111']);
            const spy = sinon.spy();
            const wrapper = mount(
              <Web3Provider>
                <div id="foo" />
              </Web3Provider>,
              {
                context: {
                  store: {
                    dispatch: spy
                  }
                }
              }
            );

            // simulate logging out
            window.web3.setAccounts([]);
            await wrapper.instance().fetchAccounts()
            clock.tick(1500);

            sinon.assert.calledWith(spy, sinon.match({
              type: 'web3/LOGOUT',
              address: null
            }));
          })
        });
      });
    });
  })
}

runTests('v0');
runTests('v1');
