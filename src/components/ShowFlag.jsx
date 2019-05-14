import React from "react";
import "./ShowFlag.css";

const ShowFlag = props => {
  return <div>{props.flag && <img src={props.flag} alt="Country flag" />}</div>;
};

export default ShowFlag;
