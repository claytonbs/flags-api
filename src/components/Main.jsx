import React from "react";
import GameActive from "./GameActive";
import GameOver from "./GameOver";

import "./Main.scss";

const Main = props => {
  return (
    <div>
      {props.checkGameOver() ? (
        <GameOver props={props} />
      ) : (
        <GameActive props={props} />
      )}
    </div>
  );
};

export default Main;
