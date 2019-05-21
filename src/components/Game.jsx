import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Nav from "./Nav";
import Main from "./Main";
import Ranking from "./Ranking";
import Spinner from "./Spinner";

function Game() {
  const [countries, setCountries] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState({});
  const [choicesList, setChoiceList] = useState([]);
  const [userChoice, setUserChoice] = useState("");
  const [message, setMessage] = useState("");
  const [points, setPoints] = useState(0);
  const [round, setRound] = useState(0);
  const [maxRounds, setMaxRounds] = useState(5);

  const [rankingFormVisible, setRankingFormVisible] = useState(false);
  const [rankingSubmitted, setRankingSubmitted] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );

        setCountries(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  // temporary
  const updateRanking = () => {
    setRankingSubmitted(true);
  };

  const handleUserChoice = choice => {
    setUserChoice(choice);

    if (choice === selectedCountry.name) {
      setMessage("Right answer!");
      setPoints(points + 1);
    } else {
      setMessage("Wrong answer!");
    }
  };

  const chooseRightCountry = () => {
    const randomCountry = Math.floor(Math.random() * (countries.length - 1));

    setSelectedCountry(countries[randomCountry]);
    return countries[randomCountry].name;
  };

  const handleNextCountry = () => {
    if (userChoice === "" && round > 0) {
      setMessage("You must choose a country");
      return;
    }
    setMessage("Which country this flag belongs?");
    setRound(round + 1);
    setUserChoice("");
    setChoiceList(makeRandomList());
  };

  const makeRandomList = () => {
    const choicesList = [];
    const fakeCountriesNumber = 4;

    for (let i = 0; i < fakeCountriesNumber; i++) {
      const fakeRandomCountry = Math.floor(
        Math.random() * (countries.length - 1)
      );

      choicesList.push(countries[fakeRandomCountry].name);
    }
    choicesList.push(chooseRightCountry());
    choicesList.sort(function() {
      return 0.5 - Math.random();
    });
    return choicesList;
  };

  const handleNewGame = () => {
    setMessage("Which country this flag belongs?");
    setRankingSubmitted(false);
    setRound(1);
    setPoints(0);
    setUserChoice("");

    setChoiceList(makeRandomList());
  };

  useEffect(() => {
    if (countries.length > 0) {
      handleNewGame();
    }
  }, [countries]);

  const checkGameOver = () => {
    if (round > maxRounds) {
      if (message !== "Game is over") {
        setMessage("Game is over");
      }
      return true;
    }

    return false;
  };

  const showRankingForm = () => {
    setRankingFormVisible(true);
  };
  const hidewRankingForm = () => {
    setRankingFormVisible(false);
  };

  return (
    <section className="app">
      <div>
        <Nav onNewGame={handleNewGame} points={points} />
        <Route
          exact
          path="/"
          component={props => (
            <Main
              handleNewGame={handleNewGame}
              countries={countries}
              checkGameOver={checkGameOver}
              handleNextCountry={handleNextCountry}
              handleUserChoice={handleUserChoice}
              selectedCountry={selectedCountry}
              choicesList={choicesList}
              userChoice={userChoice}
              message={message}
              points={points}
              round={round}
              maxRounds={maxRounds}
              rankingFormVisible={rankingFormVisible}
              showRankingForm={showRankingForm}
              hidewRankingForm={hidewRankingForm}
              updateRanking={updateRanking}
              rankingSubmitted={rankingSubmitted}
            />
          )}
        />

        <Route exact path="/ranking" component={props => <Ranking />} />

        {countries.length === 0 && <Spinner />}
      </div>
    </section>
  );
}

export default Game;
