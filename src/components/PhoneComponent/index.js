import React, { Component } from "react";
import ReactPlayer from "react-player";
import { ns } from "../../updaters/ns";
import Dots from "./Dots";

class PhoneComponent extends Component {
  state = {
    randomValues: [],
    playing: false,
    loadingFinished: false
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateRandomValues();
    }, 2000);
  }

  updateRandomValues = () => {
    const randoms = Array.from(
      { length: 13 },
      () => Math.floor(Math.random() * 100) + "%"
    );

    this.setState({
      randomValues: randoms
    });
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: "0",
          right: "25px"
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=jtgKUJMpVlo"
          style={{
            display: "none"
          }}
          config={{
            youtube: {
              preload: true
            }
          }}
          playing={this.state.playing}
          onReady={() =>
            this.setState({
              loadingFinished: true
            })
          }
        />
        <div className="cd-iphone-6 cd-scale-60 cd-center cd-padded-device cd-blueprint">
          <div className="cd-body">
            <div className="cd-sound" />
            <div className="cd-sleep" />
            <div className="cd-camera" />
            <div className="cd-ear" />
            <div
              className="cd-home"
              onClick={e => this.props.update(ns("s1", "c23"))}
              style={{ cursor: "pointer" }}
            />
            <div
              className="cd-screen cd-smart-loader"
              style={{
                backgroundColor: "rgb(48, 48, 48)"
              }}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "rgb(27, 29, 35)",
                  color: "white",
                  position: "relative",
                  height: "100%",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  paddingLeft: "10px",
                  paddingBottom: "40px"
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    height: "12px",
                    backgroundColor: "rgb(215, 218, 224)",
                    left: "0",
                    right: "0"
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "5px",
                      left: "6px",
                      height: "2px",
                      width: "2px",
                      backgroundColor: "rgb(27, 29, 35)"
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "5px",
                      left: "10px",
                      height: "2px",
                      width: "2px",
                      backgroundColor: "rgb(27, 29, 35)"
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "5px",
                      left: "14px",
                      height: "2px",
                      width: "2px",
                      backgroundColor: "rgb(27, 29, 35)"
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "relative",
                    backgroundColor: "rgb(27, 29, 35)",
                    margin: "0 0 20px",
                    width: "100px",
                    height: "100px"
                  }}
                >
                  <Dots
                    top={"3%"}
                    left={"50%"}
                    animationTop={this.state.randomValues[1]}
                    animationLeft={this.state.randomValues[2]}
                  />
                  <Dots
                    top={"97%"}
                    left={"50%"}
                    animationTop={this.state.randomValues[3]}
                    animationLeft={this.state.randomValues[4]}
                  />
                  <Dots
                    top={"50%"}
                    left={"50%"}
                    animationTop={this.state.randomValues[5]}
                    animationLeft={this.state.randomValues[6]}
                  />
                  <Dots
                    top={"50%"}
                    left={"3%"}
                    animationTop={this.state.randomValues[7]}
                    animationLeft={this.state.randomValues[8]}
                  />
                  <Dots
                    top={"50%"}
                    left={"97%"}
                    animationTop={this.state.randomValues[9]}
                    animationLeft={this.state.randomValues[10]}
                  />
                  <Dots
                    top={"74%"}
                    left={"93%"}
                    animationTop={this.state.randomValues[12]}
                    animationLeft={this.state.randomValues[11]}
                  />
                  <Dots
                    top={"74%"}
                    left={"7%"}
                    animationTop={this.state.randomValues[3]}
                    animationLeft={this.state.randomValues[2]}
                  />
                  <Dots
                    top={"11%"}
                    left={"74%"}
                    animationTop={this.state.randomValues[1]}
                    animationLeft={this.state.randomValues[4]}
                  />
                  <Dots
                    top={"11%"}
                    left={"28%"}
                    animationTop={this.state.randomValues[5]}
                    animationLeft={this.state.randomValues[6]}
                  />
                  <Dots
                    top={"28%"}
                    left={"7%"}
                    animationTop={this.state.randomValues[8]}
                    animationLeft={this.state.randomValues[10]}
                  />
                  <Dots
                    top={"90%"}
                    left={"28%"}
                    animationTop={this.state.randomValues[7]}
                    animationLeft={this.state.randomValues[9]}
                  />
                  <Dots
                    top={"90%"}
                    left={"73%"}
                    animationTop={this.state.randomValues[11]}
                    animationLeft={this.state.randomValues[1]}
                  />
                  <Dots
                    top={"28%"}
                    left={"93%"}
                    animationTop={this.state.randomValues[0]}
                    animationLeft={this.state.randomValues[4]}
                  />
                </div>
                <h1
                  style={{
                    position: "relative",
                    backgroundColor: "rgb(27, 29, 35)",
                    fontWeight: "normal",
                    margin: "0"
                  }}
                >
                  <span
                    role="img"
                    aria-label="Hand Wave"
                    style={{
                      position: "relative",
                      backgroundColor: "rgb(27, 29, 35)",
                      fontWeight: "normal",
                      margin: "0"
                    }}
                  >
                    👋
                  </span>
                  {this.props.playerNameSaved || "Nick"}
                </h1>
                <h2
                  style={{
                    position: "relative",
                    backgroundColor: "rgb(27, 29, 35)",
                    fontWeight: "normal",
                    margin: "0"
                  }}
                >
                  You have one voicemail.
                </h2>
                <button
                  style={{
                    position: "relative",
                    backgroundColor: "rgb(27, 29, 35)",
                    fontWeight: "normal",
                    margin: "10px 0 40px",
                    color: "rgba(255,255,255,1)",
                    alignItems: "flex-start",
                    textAlign: "center",
                    width: "80px",
                    border: "1px solid rgb(215, 218, 224)",
                    padding: "3px 5px 5px",
                    cursor: "pointer"
                  }}
                  onClick={() =>
                    this.setState({
                      playing: !this.state.playing
                    })
                  }
                >
                  {this.state.playing
                    ? this.state.loadingFinished ? "Stop?" : "Loading..."
                    : "Play now?"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneComponent;
