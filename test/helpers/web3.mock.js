let defaultAccounts = [];
let defaultNetwork = '1';
let accounts = defaultAccounts.slice();
let network = defaultNetwork;

module.exports = {
  eth: {
    accounts: accounts,
    getAccounts: cb => cb(null, accounts)
  },
  version: {
    getNetwork: () => network
  },
  currentProvider: {
    enable: () => {
      return Promise.resolve(accounts)
    },
  },
  setNetwork: v => network = v,
  setAccounts: v => accounts = v,
  restore: () => {
    accounts = defaultAccounts.slice();
    network = defaultNetwork;
  }
};
