import React from "react";

import ShowFlag from "./ShowFlag";
import Choices from "./Choices";
import MsgDisplay from "./MsgDisplay";
import Btn from "./Btn";

const GameActive = props => {
  props = props.props;
  console.log(props);
  return (
    <div>
      <p>{props.selectedCountry.name}</p>
      <Choices
        checkGameOver={props.checkGameOver}
        choicesList={props.choicesList}
        selectedCountry={props.selectedCountry}
        onUserChoice={props.handleUserChoice}
        userChoice={props.userChoice}
      />
      <Btn content="Next country" onClick={props.handleNextCountry} />

      <MsgDisplay
        message={`Round: ${props.round} / ${props.maxRounds}`}
        size="medium"
      />
      <ShowFlag flag={props.selectedCountry.flag} />
      <MsgDisplay message={props.message} size="big" />
    </div>
  );
};

export default GameActive;
