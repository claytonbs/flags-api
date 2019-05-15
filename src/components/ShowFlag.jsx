import React from "react";
import "./ShowFlag.scss";

const ShowFlag = props => {
  return (
    <div className="flag-container">
      {props.flag && (
        <img className="flag-img" src={props.flag} alt="Country flag" />
      )}
    </div>
  );
};

export default ShowFlag;
