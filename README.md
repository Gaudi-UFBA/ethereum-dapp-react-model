This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Using model [React-app-model](https://github.com/Levysantiago/react-app-model).

# Blockchain: React dapp model with Infura

<p align="center">
  <img src="https://i.imgur.com/2t1Lh88.png" alt="project banner">
</p>

This is a **blockchain dapp (Decentralized Application) model** using [React.js](https://pt-br.reactjs.org/) and [Ethereum blockchain](https://ethereum.org/). In this model I'm using the [Web3.js](https://web3js.readthedocs.io/) to communicate with the Ethereum blockchain and the [Infura.io](https://infura.io/) node to **deploy smart contracts** to a testnet, to get your smart contract **running almost like in real Ethereum network**. I also created a simple Smart Contract using Solidity language as an example only to show the **process of compiling and deploying** a Smart Contract. The objective of this repository is to offer a dapp model that has almost all tools needed to **create a website integrating React.js and Web3.js** in order to facilitate the creation of a dapp and also to **show how we can deploy our smart contract to a test network**, so you can see all the transactions happening and if you want, you can also use the [Etherscan API](https://etherscan.io/apis), which is **something really fun to play with**.

[![Build Status](https://travis-ci.org/Levysantiago/ethereum-dapp-react-model.svg?branch=master)](https://travis-ci.org/Levysantiago/ethereum-dapp-react-model)

# Summary

- [Getting Started](#getting-started)
  - [Versions](#versions)
  - [Cloning Repository](#cloning-repository)
  - [Installing dependences](#installing-dependences)
  - [Folder structure](#folder-structure)
  - [Compiling the Smart Contract](#compiling-the-smart-contract)
  - [Deploying the Smart Contract](#deploying-the-smart-contract)
    - [I can't wait...](#i-cant-wait)
    - [Getting started with Metamask](#getting-started-with-metamask)
    - [Getting started with Infura](#getting-started-with-infura)
    - [Setting up .env file](#setting-up-env-file)
    - [Getting testing ether](#getting-testing-ether)
    - [Deploy](#deploy)
  - [Running the app model](#running-the-app-model)
  - [Running automated tests](#running-automated-tests)
  - [Building your own smart contracts](#building-your-own-smart-contracts)
- [Knowledges](#knowledges)

# Getting started

Here are some instructions that show how to set up the project and run on your local machine for development and testing purposes.

## Versions

It's important to know the versions of some tools I used in this project, **because if you use a different version, this project may not run properly**.

- **Node.js:** v10.15.3
- **NPM:** 6.4.1

## Cloning repository

To get started, the first thing you have to do is clone the repository or download it by clicking at the green button of this repository `"Clone or download"`.

## Installing dependences

To install all dependences of the project you type the command:

```bash
$ npm install
```

## Folder structure

After the steps above, your project should look like this:

```
ethereum-dapp-react-model/
  node_modules/
  public/
    favicon.ico
    index.html
    manifest.json
  src/
    components/
        Card.jsx
        MetamaskLogo.jsx
    ethereum/
        contracts/
            TestContract.sol
        lib/
            compiler.js
            deployer.js
        compile.js
        deploy.js
    lib/
        web3.js
        web3bridge.js
    pages/
        App.js
    test/
        TestContract.test.js
    App.css
    App.test.js
    index.css
    index.js
    logo.svg
    routes.jsx
    serviceWorker.js
  .env.example
  .gitignore
  .travis.yml
  package-lock.json
  package.json
  README.md
```

You can see that the folder structure follows the format of a simple React App, the big difference here is the `ethereum/` folder, which will have all contracts you develop in Solidity language `(.sol)` and the compilation and deploying scripts to compile and publish the contracts to an Ethereum network. Also when you compile a contract, a `build/` folder will be created to store all `.json` files that will contain the **Bytecodes**, the **Contract ABI** and other data.

The [TestContract.sol](https://github.com/Levysantiago/ethereum-dapp-react-model/blob/master/src/ethereum/contracts/TestContract.sol) is a **Smart Contract Example** that I made to facilitate the process of getting the model and having already some little project to run, so you can base yourself on this project to build others more complex.

## Compiling the Smart Contract

Wait, don't run ~~\$ npm start~~ yet!! You will first need to compile the Smart Contract and then deploy it (next section). To compile the Smart Contract example you just type:

```bash
$ npm run compile
```

By running this command, your **Ethereum Folder structure** will be like this:

```
ethereum/
    build/
        TestContract.json
    contracts/
        TestContract.sol
    lib/
        compiler.js
        deployer.js
    compile.js
    deploy.js
```

> Note: The `build/` folder will be created, unless there is some sintax error at the Smart Contract created.

## Deploying the Smart Contract

### I can't wait...

I know you're tired of reading, so I'll give a command that you can run if you have already done all the steps above. At this time, you are able to run the automatic tests of the Smart Contract, to do so, you can run:

```bash
$ npm run smctest
```

The automatic tests are located in `src/test/` and the automatic tests example is in the file `TestContract.test.js`. But we'll talk more about testing later.

### Getting started with Metamask

> If you already have the Metamask app and Metamask account, you can skip this step and go to: **"Getting started with Infura"**

Be calm, we're almost there. To be able to interact with Ethereum network as a client, you need to have a wallet, and the **Metamask** is an application that offers you a client where you can buy new ethers (the Ethereum cryptocurrency) or use test ethers through an Ethereum testing network.

The best way of using the Metamask is downloading the browser extention. [Here](https://metamask.io/download.html) you can see the supported platforms, choose the one that is best for you and download it. After the download, click on the extension and follow the instructions to create a new account.

> Note: Remmember to keep the Mnemonic Words somewere safe, that is the secret phrase that Metamask will give to you. You might need it to restore the account one day.

### Getting started with Infura

> If you already have an Infura account, just create another project, choose the testnet you want and copy the url. So you can go to the next step: **"Setting up .env file"**

To implement a Smart Contract in an Ethereum network, you must use a Ethereum node to do that for you. One of these node is the **Infura.io**. You can access the website **[here](https://infura.io/)**, **create your account** and **login**. Then follow the steps here:

- Go to the Ethereum menu page;
- Click **Create New Project**;
- Insert the information needed;
- Access the project by clicking it;
- Go to **Settings** tab;
- There you will see the **Keys** section;
- In **"ENDPOINTS"** use the dropdown to select the network you want to use. For now I advise you to use the **Rinkeby** testnet, because is very stable;
- Then you copy the url that starts like this `https://rinkeby.infura.io/......` and keep it for the next section.

### Setting up .env file

Now that you've made the Metamask account and created a new project on Infura.io, we're ready to set some environmental variables of the application model. To do so, you'll need to create a file named `.env` on the root of the project, this file will contain the same information the file `.env.example` contains, that is, you'll create the `.env` file and copy the following content to it:

```
REACT_APP_PROVIDER_LINK=""
REACT_APP_MNEMONIC_WORDS=""
REACT_APP_BC_ACCOUNT=""
REACT_APP_SMC_NAME="TestContract"
REACT_APP_GAS="1000000"
REACT_APP_CONTRACT_ADDRESS=""
```

> Note: in React.js the .env variables must start with **REACT_APP\_**

The folder structure now (disregarding what is inside the folders) is like this:

```
ethereum-dapp-react-model/
  node_modules/
  public/
  src/
  .env
  .env.example
  .gitignore
  .travis.yml
  package-lock.json
  package.json
  README.md
```

Now you'll fill all attributions like this:

- The `REACT_APP_PROVIDER_LINK` will receive the Infura link which you've made the copy;
- The `REACT_APP_MNEMONIC_WORDS` is the secret phrase that Metamask gave to you when you created an account in it (don't worry, this file will not be updated to GitHub when you push your project);
- The `REACT_APP_BC_ACCOUNT` is the blockchain address you want to use to deploy the contract, you can copy the address of the metamask account you created, that is something like "0x...";
- The `REACT_APP_SMC_NAME` is the contract name, that is already filled with the name of the contract example;
- The `REACT_APP_GAS` is how much gas at maximum you are able to spend in a transaction;
- The `REACT_APP_CONTRACT_ADDRESS` is the Smart Contract blockchain address, that you'll fill out only after you deploy the contract.

The `.env` file will look like:

```
REACT_APP_PROVIDER_LINK="https://rinkeby.infura.io/......"
REACT_APP_MNEMONIC_WORDS="put your mnemonic words right here"
REACT_APP_BC_ACCOUNT="0x0000000000000000000000000000000000000000"
REACT_APP_SMC_NAME="TestContract"
REACT_APP_GAS="1000000"
REACT_APP_CONTRACT_ADDRESS=""
```

### Getting testing ether

> If you already have test ethers in your Metamask account, you can skip this section and go to the next one: **"Deploy"**

Before deploying the contract, you must have test ethers in your account wallet. If you have none, you must publish your address in some social network, like Facebook or Twitter, copy the publication url, go to [Faucet Rinkeby](https://faucet.rinkeby.io/), paste the publication url in the text field and use the dropdown button to choose the amount of ether you want.

### Deploy

Now you can deploy your Smart Contract by running the command:

```bash
$ npm run deploy
```

The output of this command will be an Ethereum blockchain address like this `0x383674830...`. This is the addres of your Smart Contract at the Ethereum Rinkeby testnet. You will copy this code and paste it in `.env` file to the `REACT_APP_CONTRACT_ADDRESS` variable.

## Running the app model

If you got here alive, that is, without any error or other difficulty, you are able to run the most expected command:

```bash
$ npm start
```

Then you can open http://localhost:3000 to see the application running in the browser. After each modification saved, the page will reload.

<p align="center">
  <img src="https://i.imgur.com/DHkzqvW.png" alt="image of the process using the smart contract example">
</p>

After running the project, you'll see a form with two inputs. The first is to set a new message to the Smart Contract, the second is to get some message that was stored in the contract. So these are the steps you can do to see the process working:

1. You type any message in the first input and click **"ADD"**;
2. You will see a Metamask tab opening waiting for your confirmation and showing how much ethers you will pay for this transaction;
3. After confirming the transaction, the rinkeby testnet will process this transaction and after some seconds publish the transaction in the network blockchain ledger;
4. Once the transaction was accepted, you can access the first message `('0')` of the contract, that will be the message that you typed. Then after new messages you can search by number 1, 2, 3 and so on. If you access a message that is not saved in the contract, the app will return `[There is no message for this index]`.

## Running automated tests

As we saw, this is the command to run the automated tests:

```bash
$ npm run smctest
```

In the test file I'm using the [ganache-cli](https://github.com/trufflesuite/ganache-cli), a development tool from [Truffle suite](https://github.com/trufflesuite). This tool simulates an ethereum client, so you can build your applications without needing to spend real ethers. To run the tests, I'm using the testing tool [mocha framework](https://mochajs.org/).

## Building your own smart contracts

To start building your own smart contracts, the Ethereum provides a really awesome tool, which is the [Remix](http://remix.ethereum.org). This is an online tool that you can use to build smart contracts, deploy it locally and test the functions manually. But also you can connect it to your local project file, or the `contracts/` folder that contains all your smart contract implementations. The model already includes the Remix local tool, that is the [remix-ide](https://github.com/ethereum/remix-ide).

So what you need to do is to go to the contracts folder and then starts the `remix-ide`

```bash
$ cd src/ethereum/contracts/
$ remix-ide
```

So the Remix-ide will start at http://localhost:8080. And after accessing this url, you will click in "Connect" when the model panel appear, as you can see bellow. For more details of how to use the remix, [see the documentation](https://remix-ide.readthedocs.io/en/latest/layout.html).

<p align="center">
<img src="https://i.imgur.com/nNcART1.gif" alt="Remix-ide connecting" width="100%">
</p>

# Knowledges

- [Node.js docs](https://nodejs.org/en/docs/);
- [React.js docs](https://pt-br.reactjs.org/docs/getting-started.html);
- [Ethereum getting started](https://ethereum.org/pt-br/what-is-ethereum/);
- [Web3.js docs](https://web3js.readthedocs.io/);
- [Metamask docs](https://docs.metamask.io/guide/);
- [Ganache-cli](https://github.com/trufflesuite/ganache-cli);
- [Mocha framework](https://mochajs.org/);
- [Infura.io docs](https://infura.io/docs);
- [Remix-ide docs](https://remix-ide.readthedocs.io/en/latest/layout.html).
