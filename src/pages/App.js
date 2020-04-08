import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Card from "../components/Card";
import web3bridge from "../lib/web3bridge";
const { web3 } = require("../lib/web3");

class App extends Component {
  state = {
    new_message: "",
    message: "",
    index: null
  };
  onChangeMessage = event => {
    this.setState({ new_message: event.target.value });
    //console.log(this.state.new_message);
  };

  onChangeIndex = event => {
    this.setState({ index: event.target.value });
    //console.log(this.state.index);
  };

  handleNewMessage = async () => {
    let accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      await web3bridge.addNewMessage(this.state.new_message, accounts[0]);
    }
  };

  handleGetMessage = async () => {
    if (this.state.index) {
      let message = await web3bridge.getMessage(this.state.index);
      if (message) {
        message = '"' + message + '"';
      } else {
        message = "[Nenhuma mensagem para este indice]";
      }
      this.setState({ message });
    }
  };

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        <Card
          onChangeMessage={this.onChangeMessage}
          handleNewMessage={this.handleNewMessage}
          onChangeIndex={this.onChangeIndex}
          handleGetMessage={this.handleGetMessage}
          message={this.state.message}
        />
      </div>
    );
  }
}

export default App;
