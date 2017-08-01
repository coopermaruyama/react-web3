# React Web3

![demo](https://d3vv6lp55qjaqc.cloudfront.net/items/0x0U0Y2G3W3L3R203l2X/Screen%20Recording%202017-07-30%20at%2005.07%20AM.gif?X-CloudApp-Visitor-Id=1754851&v=759f0b27)

Ensure web3 is available before your app loads.

`react-web3` exports a `<Web3Provider />` React component which wraps your app
and ensures it doesn't render until web3 is available. It also renders a nice
message to the user to guide them in the following cases:

1. The user is not using a web3-capable browser, or
2. The user has web3 support, but their account is locked (their ETH address is inaccessible)

Along with the above, `<Web3Provider />` also:

 * Reacts to the user unlocking their wallet or switching accounts.
 * Provides a context to your entire app with useful data.
 * Accepts a callback that is called when user switches to a different account.


## Installation

```
$ npm install react-web3
```

## Usage

Wrap your root-level react component:

```js
import { Web3Provider } from 'react-web3';

// ...

// Ensure that <App /> doesn't render until we confirm web3 is available
ReactDOM.render(rootEl,
  <Web3Provider>
    <App />
  </Web3Provider>
);
```

### Context

`<Web3Provider />` provides a child context to your app with useful data:

```js
import React from 'react';
import PropTypes from 'prop-types';

function SomeComponent(props, context) {
  const web3Context = context.web3;

  /**
   * web3Context = {
   *   accounts: {Array<string>} - All accounts
   *   selectedAccount: {string} - Default ETH account address (coinbase)
   *   network: {string} - One of 'MAINNET', 'ROPSTEN', or 'UNKNOWN'
   *   networkId: {string} - The network ID (e.g. '1' for main net)
   * }
   */

  return (
    <div>
      Hello Web3
    </div>
  );
}

SomComponent.contextTypes = {
  web3: PropTypes.object
};

export default SomeComponent;
```

### Accepted Props

`<Web3Provider />` accepts the following optional props:

  * **`onChangeAccount`:** Callback which is called when the user switches to
  a new account. Callback will receive the new ETH address as an argument.
  * **`web3UnavailableScreen`:** React component to override the screen that is
  shown when web3 is unavailable.
  * **`accountUnavailableScreen`:** React component to override the screen that
  is shown when the user's wallet is locked.

```js
<Web3Provider
  onChangeAccount={(nextAccount) => {
    window.location.href = '/logout?nextAccount=' + nextAccount;
  }}
  web3UnavailableScreen={SomeComponent}
  accountUnavailableScreen={SomeComponent}
/>
```

### Redux Support

If you're using `react-redux`, then you most likely have a `<Provider />`
component at the very root of your app. If this is the case, `<Web3Provider />`
will dispatch the following actions to you redux store:

* **`web3/RECEIVE_ACCOUNT`:** Dispatched the first time an ETH account is
available.
* **`web3/CHANGE_ACCOUNT`:** Dispatched when the user switches between accounts.

Both actions provide the ETH address at `action.address`;

#### Example Usage:

```js
// In your reducer:
function reducer(state, action) {
  switch(action.type) {
    case 'web3/RECEIVE_ACCOUNT':
      return {
        ...state,
        ethAddress: action.address
      };

    case 'web3/CHANGE_ACCOUNT':
      return {
        ...state,
        ethAddress: action.address
      };
  }
}
```
