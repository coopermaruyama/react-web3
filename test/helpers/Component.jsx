import React from 'react';
import PropTypes from 'prop-types';

class Component extends React.Component {
  render() {
    const {
      web3: {
        selectedAccount
      }
    } = this.context;

    return (
      <div className="root">
        <span className="selected-account">{selectedAccount}</span>
      </div>
    )
  }
}

Component.contextTypes = {
  web3: PropTypes.object
};

Component.displayName = 'mock-component';

export default Component;
