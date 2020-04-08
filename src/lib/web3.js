const Web3 = require("web3");

let web3 = undefined;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  web3 = new Web3(window.web3.currentProvider);
}

module.exports = {
  web3: web3
};
