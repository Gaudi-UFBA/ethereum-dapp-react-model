import React, { Component } from "react";
const ModelViewer = require("metamask-logo");

class MetamaskLogo extends Component {
  componentDidMount() {
    const { width, height, id } = this.props;

    // To render with fixed dimensions:
    let viewer = ModelViewer({
      // Dictates whether width & height are px or multiplied
      pxNotRatio: true,
      width: width,
      height: height,
      // pxNotRatio: false,
      // width: 0.9,
      // height: 0.9,

      // To make the face follow the mouse.
      followMouse: true,

      // head should slowly drift (overrides lookAt)
      slowDrift: false
    });

    // add viewer to DOM
    let container = document.getElementById("logo-container" + id);
    container.appendChild(viewer.container);

    // look at something on the page
    viewer.lookAt({
      x: 35,
      y: 35
    });

    // enable mouse follow
    viewer.setFollowMouse(true);

    // deallocate nicely
    viewer.stopAnimation();
  }

  render() {
    const { id } = this.props;
    return (
      <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
        <div
          className="col s2 offset-s5 center hide-on-med-and-down"
          id={"logo-container" + id}
          style={{ marginTop: 20 }}
        />
      </a>
    );
  }
}

export default MetamaskLogo;
