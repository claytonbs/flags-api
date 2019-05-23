import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Nav from "./Nav";
import Main from "./Main";
import Ranking from "./Ranking";
import Spinner from "./Spinner";

function Game() {
  const [game, setGame] = useState({
    countries: [],
    choicesList: { selectedCountry: {}, choicesCountries: [] },
    userChoice: "",
    message: "",
    points: 0,
    round: 0,
    maxRounds: 5
  });

  const handleNewGame = () => {
    //reset game states needed for new game
    setGame({
      ...game,
      message: "Which country this flag belongs?",
      rankingSubmitted: false,
      round: 1,
      points: 0,
      userChoice: "",
      choicesList: makeRandomList()
    });
  };

  // create a array with a list of 5 random countries
  const makeRandomList = () => {
    const choicesCountries = [];
    const sizeOfChoicesList = 5;

    for (let i = 0; i < sizeOfChoicesList; i++) {
      const fakeRandomCountry = Math.floor(
        Math.random() * (game.countries.length - 1)
      );

      choicesCountries.push(game.countries[fakeRandomCountry]);
    }

    // select the first country in the array to be the correct answer
    const selectedCountry = choicesCountries[0];

    // scramble the countries list
    choicesCountries.sort(function() {
      return 0.5 - Math.random();
    });

    // return the list of 5 countries plus a object
    // that contain all data about the correct country
    return {
      selectedCountry: { ...selectedCountry },
      choicesCountries: [...choicesCountries]
    };
  };

  // test if the user's answer is correct
  const handleUserChoice = choice => {
    if (choice === game.choicesList.selectedCountry.name) {
      setGame({
        ...game,
        message: "Right answer",
        points: game.points + 1,
        userChoice: choice
      });
    } else {
      setGame({ ...game, message: "Wrong answer!", userChoice: choice });
    }
  };

  // handle the button to call the next country
  const handleNextCountry = () => {
    if (game.userChoice === "" && game.round > 0) {
      setGame({ ...game, message: "You must choose a country" });
      return;
    }
    setGame({
      ...game,
      message: "Which country this flag belongs?",
      round: game.round + 1,
      userChoice: "",
      choicesList: makeRandomList()
    });
  };

  const checkGameOver = () => {
    if (game.round > game.maxRounds) {
      if (game.message !== "Game is over") {
        setGame({ ...game, message: "Game is over" });
      }
      return true;
    }
    return false;
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );

        setGame({ ...game, countries: [...response.data] });
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (game.countries.length > 0) {
      handleNewGame();
    }
  }, [game.countries]);

  return (
    <section className="main-game">
      <div>
        <Nav onNewGame={handleNewGame} game={game} />
        <Route
          exact
          path="/"
          component={props => (
            <Main
              game={game}
              handleNewGame={handleNewGame}
              checkGameOver={checkGameOver}
              handleNextCountry={handleNextCountry}
              handleUserChoice={handleUserChoice}
            />
          )}
        />
        <Route exact path="/ranking" component={Ranking} />

        {game.countries.length === 0 && <Spinner />}
      </div>
    </section>
  );
}

export default Game;
