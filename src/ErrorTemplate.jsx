import React, { Component } from 'react';
import IconNoWeb3 from './IconNoWeb3';
import stylesheet from './stylesheet';

class ErrorTemplate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
          dangerouslySetInnerHTML={{ __html: this.props.title }}
        />
        <p
          className="Web3Provider-message"
          dangerouslySetInnerHTML={{ __html: this.props.message }}
        />
      </div>
    </div>
    )
  }
}

module.exports = ErrorTemplate;
