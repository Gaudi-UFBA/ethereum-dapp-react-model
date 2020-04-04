const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
/*Creating web3 instance*/
const web3 = new Web3(ganache.provider());
// Getting the interface and bytecode of the contract to deploy and get the contract instance
const { interface, bytecode } = require("../ethereum/build/TestContract.json");

let accounts;
let contract;
beforeEach(async () => {
  // Getting the accounts from ganache provider
  accounts = await web3.eth.getAccounts();

  // Deploying contract in ganache local testnet and getting the contract instance
  contract = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [] })
    .send({ from: accounts[0], gas: "1000000" });
});

/**
 * Verifying if the contract address is valid
 **/
describe("TestContract", () => {
  it("Testing address", () => {
    assert.ok(contract.options.address);
  });

  /**
   * Trying to get a message by index 0. We expect an empty string, nothing were saved.
   **/

  it("Verifying initial messages mapping", async () => {
    // Callling the contract method
    messages = await contract.methods.messages(0).call();

    // Asserting that the returned value is an empty string
    assert.equal(messages, "", "The mapping should be empty");
  });

  /**
   * Setting a new message and asserting that this message was really saved
   **/
  it("Setting new message", async () => {
    // Calling the "add" method of the contract to add a new message
    messages = await contract.methods
      .add("new message")
      .send({ from: accounts[0], gas: 100000 });

    // Calling the first element of messages mapping from contract
    messages = await contract.methods.messages(0).call();

    // Asserting that the right message was saved
    assert.equal(
      messages,
      "new message",
      "The message should be 'new message'"
    );
  });
});
