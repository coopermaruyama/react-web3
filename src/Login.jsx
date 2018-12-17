const React = require('react');
const IconNoWeb3 = require('./IconNoWeb3');
const stylesheet = require('./stylesheet');

let requestLogin
function LoginView(props) {
  requestLogin = props.requestLogin.bind(this)
  return (
    <div className="Web3Provider-container">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }}
      />
      <div className="Web3Provider-wrapper">
        <div className="Web3Provider-image">
          <IconNoWeb3 />
        </div>
        <h1
          className="Web3Provider-title"
          dangerouslySetInnerHTML={{ __html: 'No ETH Account Available' }}
        />
        <p
          className="Web3Provider-message"
          dangerouslySetInnerHTML={{ __html: 'You are not yet logged in.' }}
        />
        <div>
          <button className="web3ConnectButton" onClick={requestLogin}>
            Connect
          </button>
        </div>
      </div>
    </div>
  )
}

module.exports = LoginView;
