import React, { useState } from "react";
import MsgDisplay from "./MsgDisplay";
import Btn from "./Btn";
import RankingForm from "./RankingForm";

const GameOver = ({ data, data: { game } }) => {
  const [formVisible, setFormVisible] = useState(false);
  const [formSubmitted, setformSubmitted] = useState(false);

  const formSubmit = () => {
    setformSubmitted(true);
  };

  const showRankingForm = () => {
    setFormVisible(true);
  };
  const hidewRankingForm = () => {
    setFormVisible(false);
  };

  return (
    <React.Fragment>
      <MsgDisplay
        message={`You made ${game.points} of ${game.maxRounds} points`}
        size="medium"
      />
      <MsgDisplay message={game.message} size="big" />

      {formSubmitted || (
        <Btn content="Put your name in the ranking" onClick={showRankingForm} />
      )}

      {formSubmitted && (
        <Btn content="Play again?" onClick={data.handleNewGame} />
      )}

      <div>
        {formVisible && (
          <RankingForm
            game={game}
            onNewGame={data.handleNewGame}
            formSubmitted={formSubmitted}
            hideRankingForm={hidewRankingForm}
            formSubmit={formSubmit}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default GameOver;
