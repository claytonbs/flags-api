import React from "react";
import "./MsgDisplay.scss";

const MsgDisplay = props => {
  return <h2 className={`msg-${props.size}`}>{props.message}</h2>;
};

export default MsgDisplay;
