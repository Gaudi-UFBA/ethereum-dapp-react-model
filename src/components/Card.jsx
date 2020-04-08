import React, { Component } from "react";

class Card extends Component {
  render() {
    const {
      onChangeMessage,
      handleNewMessage,
      onChangeIndex,
      handleGetMessage,
      message
    } = this.props;
    return (
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card">
            <div className="card-content black-text">
              <span className="card-title">Add a new message</span>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="message"
                    type="text"
                    className="validate col s8"
                    onChange={onChangeMessage.bind(this)}
                  />
                  <label htmlFor="message">New Message</label>
                  <div className="col s2">
                    <button
                      className="btn waves-effect waves-light col s12"
                      onClick={handleNewMessage}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              <span className="card-title">Get a message</span>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="index"
                    type="number"
                    className="validate col s2"
                    onChange={onChangeIndex.bind(this)}
                  />
                  <label htmlFor="index">Index</label>
                  <div className="col s10">
                    <button
                      className="btn waves-effect waves-light col s2"
                      onClick={handleGetMessage}
                    >
                      Get
                    </button>
                  </div>
                </div>

                <p>Message:</p>
                <ul className="collection">
                  <li className="collection-item">{message}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
