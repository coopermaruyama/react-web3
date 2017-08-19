const React = require('react');
const IconNoWeb3 = require('./IconNoWeb3');
const stylesheet = require('./stylesheet');

function AccountUnavailable(props) {
  return (
    <div className="Web3Provider-container">
      <style dangerouslySetInnerHTML={{ __html: stylsheet }}
      />
      <div className="Web3Provider-wrapper">
        <div className="Web3Provider-image">
          <IconNoWeb3 />
        </div>
        <h1 className="Web3Provider-title">
          No ETH Account Available
        </h1>
        <p className="Web3Provider-message">
          It seems that you don&apos;t have an ETH account selected. If using
          MetaMask, please make sure that your wallet is unlocked and that
          you have at least one account in your accounts list.
        </p>
      </div>
    </div>
  )
}

module.exports = AccountUnavailable;
