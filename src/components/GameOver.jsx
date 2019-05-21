import React from "react";
import MsgDisplay from "./MsgDisplay";
import Btn from "./Btn";
import RankingForm from "./RankingForm";
const GameOver = props => {
  props = props.props;
  return (
    <React.Fragment>
      <MsgDisplay
        message={`You made ${props.points} of ${props.maxRounds} points`}
        size="medium"
      />
      <MsgDisplay message={props.message} size="big" />

      {props.rankingSubmitted || (
        <Btn
          content="Put your name in the ranking"
          onClick={props.showRankingForm}
        />
      )}

      {props.rankingSubmitted && (
        <Btn content="Play again?" onClick={props.handleNewGame} />
      )}

      <div>
        {props.rankingFormVisible && (
          <RankingForm
            points={props.points}
            hideRankingForm={props.hidewRankingForm}
            updateRanking={props.updateRanking}
            rankingSubmitted={props.rankingSubmitted}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default GameOver;
