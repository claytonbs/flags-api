import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowFlag from "./ShowFlag";
import Choices from "./Choices";
import MsgDisplay from "./MsgDisplay";

import "./Main.scss";

//import { truncate } from "fs";

const Main = props => {
  // const [countries, setCountries] = useState([]);

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
      <button
        disabled={props.checkGameOver()}
        className="btn-next"
        onClick={props.handleNextCountry}
      >
        Next country
      </button>
      <MsgDisplay
        message={
          props.round > props.maxRounds
            ? `You made ${props.points} of ${props.maxRounds} points`
            : `Round: ${props.round} / ${props.maxRounds}`
        }
        size="medium"
      />
      <ShowFlag flag={props.selectedCountry.flag} />
      <MsgDisplay message={props.message} size="big" />
    </div>
  );
};

export default Main;
