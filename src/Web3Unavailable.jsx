const React = require('react');
const ErrorTemplate = require('./ErrorTemplate');

const Web3Unavailable = ErrorTemplate.bind(null, {
  title: 'Web3 Not Found',
  message: `
It seems that you are using a browser without Web3 capabilities. Please
make sure that you are using a web3-capable browser like mist or parity.
If you are using MetaMask or Parity extension, make sure that it is
enabled.
`
});

module.exports = Web3Unavailable;
