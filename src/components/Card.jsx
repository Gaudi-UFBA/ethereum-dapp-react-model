import React, { Component } from "react";

class Card extends Component {
  render() {
    const {
      onChangeMessage,
      handleNewMessage,
      onChangeIndex,
      handleGetMessage,
      message,
      loader,
      mtmskwarning
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
                  <div className="col s4 l2">
                    <button
                      className="btn waves-effect waves-light col s12"
                      onClick={handleNewMessage}
                    >
                      Add
                    </button>
                  </div>
                  <div className={"col s12 " + mtmskwarning}>
                    <label className="red-text">
                      Please click the fox face to install and use Metamask.
                    </label>
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
                      className="btn waves-effect waves-light col s4 l2"
                      onClick={handleGetMessage}
                    >
                      Get
                    </button>
                  </div>
                </div>

                <div className={"progress col s8 offset-s2 " + loader}>
                  <div className="indeterminate"></div>
                </div>

                <p className="col s12">Message:</p>
                <ul className="collection col s12">
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
