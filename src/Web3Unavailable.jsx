const React = require('react');
const IconNoWeb3 = require('./IconNoWeb3');
const stylesheet = require('./stylesheet');

function Web3Unavailable(props) {
  return (
    <div className="Web3Provider-container">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }}
      />
      <div className="Web3Provider-wrapper">
        <div className="Web3Provider-image">
          <IconNoWeb3 />
        </div>
        <h1 className="Web3Provider-title">
          Web3 Not Found
        </h1>
        <p className="Web3Provider-message">
          It seems that you are using a browser without Web3 capabilities. Please
          make sure that you are using a web3-capable browser like mist or parity.
          If you are using MetaMask or Parity extension, make sure that it is
          enabled.
        </p>
      </div>
    </div>
  )
}

module.exports = Web3Unavailable;
