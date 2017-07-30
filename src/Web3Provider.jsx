const React = require('react');
const PropTypes = require('prop-types');
const isEmpty = require('lodash/isEmpty');
const AccountUnavailable = require('./AccountUnavailable');
const Web3Unavailable = require('./Web3Unavailable');

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const propTypes = {
  web3UnavailableScreen: PropTypes.any,
  accountUnavailableScreen: PropTypes.any,
  onChangeAccount: PropTypes.func
};
const defaultProps = {
  web3UnavailableScreen: Web3Unavailable,
  accountUnavailableScreen: AccountUnavailable
};
const childContextTypes = {
  web3: PropTypes.shape({
    accounts: PropTypes.array,
    selectedAccount: PropTypes.string,
    network: PropTypes.string,
    networkId: PropTypes.string
  })
};

class Web3Provider extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      accounts: this.getAccounts(),
      networkId: null,
      networkError: null
    };
    this.interval = null;
    this.networkInterval = null;
    this.fetchAccounts = this.fetchAccounts.bind(this);
    this.fetchNetwork = this.fetchNetwork.bind(this);
  }

  getChildContext() {
    return {
      web3: {
        accounts: this.state.accounts,
        selectedAccount: this.state.accounts && this.state.accounts[0],
        network: getNetwork(this.state.networkId),
        networkId: this.state.networkId
      }
    };
  }

  /**
   * Start polling accounts, & network. We poll indefinitely so that we can
   * react to the user changing accounts or netowrks.
   */
  componentDidMount() {
    this.fetchAccounts();
    this.fetchNetwork();
    this.initPoll();
    this.initNetworkPoll();
  }

  /**
   * Init web3/account polling, and prevent duplicate interval.
   * @return {void}
   */
  initPoll() {
    if (!this.interval) {
      this.interval = setInterval(this.fetchAccounts, ONE_SECOND);
    }
  }

  /**
   * Init network polling, and prevent duplicate intervals.
   * @return {void}
   */
  initNetworkPoll() {
    if (!this.networkInterval) {
      this.networkInterval = setInterval(this.fetchNetwork, ONE_MINUTE);
    }
  }

  /**
   * Update state regarding the availability of web3 and an ETH account.
   * @return {void}
   */
  fetchAccounts() {
    const { web3 } = window;
    const ethAccounts = this.getAccounts();

    if (isEmpty(ethAccounts)) {
      web3 && web3.eth && web3.eth.getAccounts((err, accounts) => {
        if (err) {
          this.setState({
            accountsError: err
          });
        } else {
          let next = accounts[0];
          let curr = this.state.accounts[0];
          next = next && next.toLowerCase();
          curr = curr && curr.toLowerCase();
          const didChange = curr && next && (curr !== next);

          if (didChange) {
            this.props.onChangeAccount(next);
          }
          this.setState({
            accountsError: null,
            accounts
          })
        }
      });
    } else {
      let next = ethAccounts[0];
      let curr = this.state.accounts[0];
      next = next && next.toLowerCase();
      curr = curr && curr.toLowerCase();
      const didChange = curr && next && (curr !== next);

      if (didChange) {
        this.props.onChangeAccount(next);
      }
      this.setState({
        accountsError: null,
        accounts: ethAccounts
      })
    }
  }

  /**
   * Get the network and update state accordingly.
   * @return {void}
   */
  fetchNetwork() {
    const { web3 } = window;

    web3 && web3.version && web3.version.getNetwork((err, netId) => {
      if (err) {
        this.setState({
          networkError: err
        });
      } else {
        this.setState({
          networkError: null,
          networkId: netId
        })
      }
    });
  }

  /**
   * Get the account. We wrap in try/catch because reading `web3.eth.accounrs`
   * will throw if no account is selected.
   * @return {String}
   */
  getAccounts() {
    try {
      const { web3 } = window;
      // throws if no account selected
      const accounts = web3.eth.accounts;

      return accounts;
    } catch (e) {
      return null;
    }
  }

  render() {
    const { web3 } = window;
    const {
      web3UnavailableScreen: Web3UnavailableComponent,
      accountUnavailableScreen: AccountUnavailableComponent
    } = this.props;
    if (!web3) {
      return <Web3UnavailableComponent />;
    }

    if (isEmpty(this.state.accounts)) {
      return <AccountUnavailableComponent />;
    }

    return this.props.children;
  }
}

Web3Provider.propTypes = propTypes;
Web3Provider.defaultProps = defaultProps;
Web3Provider.childContextTypes = childContextTypes;

module.exports = Web3Provider;

/* =============================================================================
=    Deps
============================================================================= */
function getNetwork(networkId) {
  switch (networkId) {
    case '1':
      return 'MAINNET';
    case '2':
      return 'MORDEN';
    case '3':
      return 'ROPSTEN';
    default:
      return 'UNKNOWN';
  }
}
