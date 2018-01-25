import React from "react";

import MapCircle from "../MapCircle";
import train from "../../images/train.png";

const TrainAnimation = props => (
  <div style={{ position: "relative" }} onClick={e => props.update()}>
    <MapCircle top="50%" left="33%" />
    <MapCircle top="34%" left="46%" />
    <MapCircle top="15%" left="45%" />
    <img src={train} alt="train" />
  </div>
);

export default TrainAnimation;
