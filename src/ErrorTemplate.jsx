const React = require('react');
const IconNoWeb3 = require('./IconNoWeb3');
const stylesheet = require('./stylesheet');

function ErrorTemplate(props) {
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
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className="Web3Provider-message"
          dangerouslySetInnerHTML={{ __html: props.message }}
        />
      </div>
    </div>
  )
}

module.exports = ErrorTemplate;
