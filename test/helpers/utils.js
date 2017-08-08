import React from 'react';
import Web3Provider from '../../src/Web3Provider';
import { shallow, mount } from 'enzyme';

export const wait = t => new Promise(
  (resolve, reject) => setTimeout(t, resolve)
);

export const getWrapper = () => shallow(
  <Web3Provider>
    <div id="foo" />
  </Web3Provider>
);
export const getMount = () => mount(
  <Web3Provider>
    <div id="foo" />
  </Web3Provider>
);
