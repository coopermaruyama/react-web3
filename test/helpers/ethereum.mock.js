let defaultAccounts = [];
let accounts = defaultAccounts.slice();

module.exports = {
  setAccounts: v => accounts = v,
  enable: () => {
    return Promise.resolve(accounts)
  },
};
