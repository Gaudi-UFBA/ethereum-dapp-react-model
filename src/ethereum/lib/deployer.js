require("dotenv").config();
const env = process.env;
const Web3 = require("web3");
const HDWalletProvider = require("truffle-hdwallet-provider");
const provider = new HDWalletProvider(env.MNEMONIC_WORDS, env.PROVIDER_LINK);
const web3 = new Web3(provider);

module.exports = {
  deploy: async contract => {
    // Create a new contract and define ABI access
    const result = await new web3.eth.Contract(JSON.parse(contract.interface))
      // Deploy configuration
      .deploy({
        data: contract.bytecode,
        arguments: [env.BC_ACCOUNT]
      })
      .send({
        gas: env.GAS,
        from: env.BC_ACCOUNT
      });
    console.log(result.options.address);
  }
};
