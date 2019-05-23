import React from "react";

import ShowFlag from "./ShowFlag";
import Choices from "./Choices";
import MsgDisplay from "./MsgDisplay";
import Btn from "./Btn";

const GameActive = props => {
  return (
    <div>
      <p>{props.data.game.choicesList.selectedCountry.name}</p>
      <Choices
        checkGameOver={props.data.checkGameOver}
        selectedCountry={props.data.game.selectedCountry}
        onUserChoice={props.data.handleUserChoice}
        game={props.data.game}
      />
      <Btn content="Next country" onClick={props.data.handleNextCountry} />

      <MsgDisplay
        message={`Round: ${props.data.game.round} / ${
          props.data.game.maxRounds
        }`}
        size="medium"
      />
      <ShowFlag flag={props.data.game.choicesList.selectedCountry.flag} />
      <MsgDisplay message={props.data.game.message} size="big" />
    </div>
  );
};

export default GameActive;
