let defaultAccounts = [];
let defaultNetwork = '1';
let accounts = defaultAccounts.slice();
let network = defaultNetwork;

const web3 = {
  eth: {
    accounts: {
      wallet: {
        length: 0
      }
    },
    getAccounts: cb => cb(null, accounts),
    net: {
      getId: cb => cb(null, network)
    }
  },
  setNetwork: v => network = v,
  setAccounts: v => {
    accounts = v;
    accounts.forEach((address, i) => {
      web3.eth.accounts.wallet[i] = {
        address: address
      };
    });
    web3.eth.accounts.wallet.length = accounts.length;
  },
  restore: () => {
    accounts = defaultAccounts.slice();
    network = defaultNetwork;
    web3.eth.accounts.wallet = { length: 0 };
  },
  version: '1.0.0-beta.20'
};

module.exports = web3;
