import React from "react";

import ShowFlag from "./ShowFlag";
import Choices from "./Choices";
import MsgDisplay from "./MsgDisplay";
import Btn from "./Btn";

const GameActive = ({ data, data: { game } }) => {
  console.log(data);
  console.log(game);
  return (
    <div>
      <p>{game.choicesList.selectedCountry.name}</p>
      <Choices
        checkGameOver={data.checkGameOver}
        onUserChoice={data.handleUserChoice}
        game={game}
      />
      <Btn content="Next country" onClick={data.handleNextCountry} />

      <MsgDisplay
        message={`Round: ${game.round} / ${game.maxRounds}`}
        size="medium"
      />
      <ShowFlag flag={game.choicesList.selectedCountry.flag} />
      <MsgDisplay message={game.message} size="big" />
    </div>
  );
};

export default GameActive;
