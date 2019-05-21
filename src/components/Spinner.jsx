import React from "react";
import "./Spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner-container" />;
      <p className="spinner-caption">Loading...</p>
    </div>
  );
};
export default Spinner;
