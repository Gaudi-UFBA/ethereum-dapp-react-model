import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import Card from "../components/Card";
import web3bridge from "../lib/web3bridge";
import MetamaskLogo from "../components/MetamaskLogo";
const { web3 } = require("../lib/web3");

class App extends Component {
  state = {
    new_message: "",
    message: "",
    index: null,
    loader: "hide",
    mtmskwarning: "hide"
  };
  onChangeMessage = event => {
    this.setState({ new_message: event.target.value });
  };

  onChangeIndex = event => {
    this.setState({ index: event.target.value });
  };

  handleNewMessage = async () => {
    let accounts = await web3.eth.getAccounts();
    if (accounts.length > 0) {
      if (this.state.new_message) {
        this.setState({ loader: "" });
        await web3bridge.addNewMessage(this.state.new_message, accounts[0]);
        this.setState({ loader: "hide" });
      }
    } else {
      this.setState({ mtmskwarning: "" });
    }
  };

  handleGetMessage = async () => {
    if (this.state.index) {
      this.setState({ loader: "" });
      let message = await web3bridge.getMessage(this.state.index);
      this.setState({ loader: "hide" });
      if (message) {
        message = '"' + message + '"';
      } else {
        message = "[There is no message for this index]";
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
          </header>
        </div>
        <div className="row">
          <MetamaskLogo width="80" height="80" />
          <Card
            onChangeMessage={this.onChangeMessage}
            handleNewMessage={this.handleNewMessage}
            onChangeIndex={this.onChangeIndex}
            handleGetMessage={this.handleGetMessage}
            message={this.state.message}
            loader={this.state.loader}
            mtmskwarning={this.state.mtmskwarning}
          />
        </div>
      </div>
    );
  }
}

export default App;
