import React from "react";
import "./ShowFlag.scss";

const ShowFlag = ({ flag }) => {
  return (
    <div className="flag-container">
      {flag && <img className="flag-img" src={flag} alt="Country flag" />}
    </div>
  );
};

export default ShowFlag;
