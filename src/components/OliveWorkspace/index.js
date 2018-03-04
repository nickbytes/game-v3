import DollarSign from "react-feather/dist/icons/dollar-sign";
import Lock from "react-feather/dist/icons/lock";
import Eye from "react-feather/dist/icons/eye";
import Watch from "react-feather/dist/icons/watch";
import Briefcase from "react-feather/dist/icons/briefcase";
import Sun from "react-feather/dist/icons/sun";
import Clipboard from "react-feather/dist/icons/clipboard";
import Camera from "react-feather/dist/icons/camera";
import Draggable from "react-draggable";
import React from "react";

import place1 from "../../images/keys.jpg";
import place2 from "../../images/bridge.png";
import truth from "../../images/truth.gif";
import frailty from "../../images/frailty.png";
import plains from "../../images/plains.jpg";

import {
  ListItem,
  Raw,
  WindowBody,
  WindowContainer,
  WindowHeader,
  WindowTitle
} from "../Workspace";

import styled from "styled-components";

import LeftBar from "../Workspace/LeftBar";
import RightBar from "../Workspace/RightBar";
import TopBar from "../Workspace/TopBar";
import WorkspaceContainer from "../Workspace/WorkspaceContainer";

const DesktopBackground = styled.div`
  background-color: rgba(31, 34, 40, 1);
  background-image: url(${plains});
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const OliveWorkspace = props => (
  <WorkspaceContainer>
    <TopBar className="desktop-topBar">
      <LeftBar />
      <RightBar coffee={props.coffee} {...props} />
    </TopBar>
    <DesktopBackground className="desktop-bg">
      {props.children}
      <Draggable>
        <WindowContainer
          style={{ right: "100px", top: "55px" }}
          bgColor={"rgba(104, 159, 182, 1.000)"}
        >
          <WindowHeader
            className="handle"
            bgColor={"rgba(83, 135, 245, 0.700)"}
          >
            <WindowTitle>
              <Sun size={18} style={{ marginRight: "5px" }} />
              <span>{`Good Morning, ${props.playerNameSaved || "Nick"}`}</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody>
            <ul>
              <ListItem>
                <Briefcase style={{ marginRight: "10px" }} />
                <span>You have 39 meetings today.</span>
              </ListItem>
              <ListItem>
                <Watch style={{ marginRight: "10px" }} />
                <span>You have 7 deadlines today.</span>
              </ListItem>
              <ListItem>
                <Lock style={{ marginRight: "10px" }} />
                <span>You have not enabled 2FA.</span>
              </ListItem>
              <ListItem>
                <Eye style={{ marginRight: "10px" }} />
                <span>You yearly review is in 3 days.</span>
              </ListItem>
              <ListItem>
                <DollarSign style={{ marginRight: "10px" }} />
                <span>
                  You have not contributed to your 401k, would you like to
                  start?
                </span>
              </ListItem>
            </ul>
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <Draggable handle=".handle">
        <WindowContainer style={{ top: "40%", left: "30%" }}>
          <WindowHeader className="handle">
            <WindowTitle>
              <span>Device per source</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody>
            <Raw src={place1} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <Draggable handle=".handle">
        <WindowContainer style={{ top: "50%", left: "50%" }}>
          <WindowHeader className="handle">
            <WindowTitle>
              <span>Fekkfyzystem</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody>
            <Raw src={place2} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>

      <Draggable handle=".handle">
        <WindowContainer style={{ top: "60%", left: "10%" }}>
          <WindowHeader className="handle">
            <WindowTitle>
              <span>Frailty Stow</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody>
            <Raw src={frailty} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>

      <Draggable handle=".handle">
        <WindowContainer style={{ top: "60%", left: "70%" }}>
          <WindowHeader className="handle">
            <WindowTitle>
              <span>Raw recording</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody>
            <Raw src={truth} alt={"something"} />
          </WindowBody>
        </WindowContainer>
      </Draggable>
      <Draggable handle=".handle">
        <WindowContainer
          style={{ right: "123px", top: "185px" }}
          bgColor={"#e5c273"}
          bColor={"#d29b62"}
        >
          <WindowHeader
            className="handle"
            bgColor={"rgba(230, 195, 109, 0.7)"}
            bColor={"#d29b62"}
          >
            <WindowTitle>
              <Clipboard size={18} style={{ marginRight: "5px" }} />
              <span>Notes</span>
            </WindowTitle>
          </WindowHeader>
          <WindowBody>
            <ul>
              <li>Research system dynamics</li>
              <li>Review Ethical Investments from Frontier Imaginaries</li>
              <li>Process emulation fever dream, due EOD.</li>
              <li>Military cybernetics?!?!</li>
              <li>4, 8, 15, 16, 23, 42</li>
            </ul>
          </WindowBody>
        </WindowContainer>
      </Draggable>
    </DesktopBackground>
  </WorkspaceContainer>
);

export default OliveWorkspace;
