require('babel-polyfill');
const { JSDOM } = require('jsdom');
const web3 = require('./helpers/web3.mock.js');
const ethereum = require('./helpers/ethereum.mock.js')
const web3_v1 = require('./helpers/web3-v1.mock.js');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

window.ethereum = ethereum;
global.ethereum = ethereum;
window.web3 = web3;
global.web3 = web3;
window.web3_v1 = web3_v1;
global.web3_v1 = web3_v1;
global.HTMLElement = window.HTMLElement;
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
