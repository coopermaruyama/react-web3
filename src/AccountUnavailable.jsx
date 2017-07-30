const React = require('react');
const IconNoWeb3 = require('./IconNoWeb3');

function AccountUnavailable(props) {
  return (
    <div className="Web3Provider-container">
      <style dangerouslySetInnerHTML={{__html: `
        .Web3Provider-container {
          color: hsl(0,0%,50%);
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          background: hsl(0, 0%, 95%);
          background: -webkit-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
          background: -moz-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
          background: -o-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
          background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
        }
        .Web3Provider-wrapper {
          width: 400px;
          border: 1px solid hsl(207, 90%, 54%);
          border-radius: 20px;
          text-align: center;
          padding: 50px 40px;
          margin: 80px auto;
        }
        .Web3Provider-image {
          max-height: 175px;
        }
        .Web3Provider-title {
          margin-top: 50px;
          color: hsl(0,0%,25%);
        }
        .Web3Provider-message {
          line-height: 27px;
          font-size: 18px;
          color: hsl(0,0%,50%);
        }
        `}}
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
