const { web3 } = require("./web3");
require("dotenv").config();
const { REACT_APP_GAS, REACT_APP_CONTRACT_ADDRESS } = process.env;

const web3bridge = {
  getContractInstance: async () => {
    const compiled_contract = require("../ethereum/build/TestContract.json");
    return await new web3.eth.Contract(
      JSON.parse(compiled_contract.interface),
      REACT_APP_CONTRACT_ADDRESS
    );
  },
  addNewMessage: async (new_message, from) => {
    const contract = await web3bridge.getContractInstance();
    return await contract.methods
      .add(new_message)
      .send({ from: from, gas: REACT_APP_GAS });
  },

  getMessage: async index => {
    const contract = await web3bridge.getContractInstance();
    return await contract.methods.messages(index).call();
  }
};

export default web3bridge;
