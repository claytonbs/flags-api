import React, { useState } from "react";
import MsgDisplay from "./MsgDisplay";
import Btn from "./Btn";
import RankingForm from "./RankingForm";

const GameOver = props => {
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
        message={`You made ${props.data.game.points} of ${
          props.data.game.maxRounds
        } points`}
        size="medium"
      />
      <MsgDisplay message={props.data.game.message} size="big" />

      {formSubmitted || (
        <Btn content="Put your name in the ranking" onClick={showRankingForm} />
      )}

      {formSubmitted && (
        <Btn content="Play again?" onClick={props.data.handleNewGame} />
      )}

      <div>
        {formVisible && (
          <RankingForm
            game={props.data.game}
            formSubmitted={formSubmitted}
            hideRankingForm={hidewRankingForm}
            formSubmit={formSubmit}
            rankingSubmitted={props.rankingSubmitted}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default GameOver;
