import React from "react";

const Landing = props => {
  return (
    <div>
      <h1>Landing page</h1>
      <button onClick={props.startGame}>Start game</button>
    </div>
  );
};

export default Landing;
