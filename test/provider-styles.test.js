import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import PropTypes from 'prop-types';
import Web3Provider from '../src/Web3Provider';
import Component from './helpers/Component';
import { wait, getWrapper, getMount } from './helpers/utils';

describe('Styles', function () {

  it('should load default stylesheet', () => {
    const wrapper = mount(
      <Web3Provider>
        <div id="foo" />
      </Web3Provider>
    );
    const html = wrapper.html();

    expect(html).to.contain(`<style>`);
    expect(html).to.contain(`.Web3Provider-container`);
  });
});
