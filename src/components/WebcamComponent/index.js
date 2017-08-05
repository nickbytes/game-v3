import { connect } from "funcup";
import React, { Component } from "react";
import Webcam from "react-webcam";

import { receiveBadge } from "../../updaters/updaters";
import UserQuote from "../UserQuote";
import YourNewBadge from "../YourNewBadge";

class WebcamComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoSrc: ""
    };

    this.takePhoto = this.takePhoto.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  setRef = webcam => {
    this.webcam = webcam;
  };
  takePhoto() {
    const imageSrc = this.webcam.getScreenshot();

    this.setState({
      photoSrc: imageSrc
    });
  }
  render() {
    return (
      <div>
        {this.state.photoSrc
          ? <div>
              <UserQuote pl={"300px"}>
                "Here is your new{" "}
                <button
                  style={{
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    lineHeight: "inherit",
                    border: "0",
                    background: "none",
                    cursor: "pointer",
                    borderBottom: "4px dotted",
                    outline: "0"
                  }}
                  onClick={e => this.props.update(receiveBadge)}
                >
                  badge
                </button>."
              </UserQuote>
              {this.props.newBadgeReceived &&
                <YourNewBadge
                  imgSrc={this.state.photoSrc}
                  playerName={this.props.playerNameSaved}
                  playerOccupation={this.props.playerOccupationSaved}
                />}
            </div>
          : <div
              style={{
                position: "relative",
                textAlign: "center"
              }}
            >
              <Webcam ref={this.setRef} audio={false} />
              <button
                onClick={this.takePhoto}
                style={{
                  position: "absolute",
                  left: "50%",
                  right: "50%",
                  bottom: "0"
                }}
              >
                Take Photo
              </button>
            </div>}
      </div>
    );
  }
}

const map = state => ({
  newBadgeReceived: state.newBadgeReceived,
  playerNameSaved: state.playerNameSaved,
  playerOccupationSaved: state.playerOccupationSaved
});

export default connect(map)(WebcamComponent);