import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowFlag from "./ShowFlag";
import Choices from "./Choices";
import MsgDisplay from "./MsgDisplay";

import "./Main.scss";
//import { truncate } from "fs";

const Main = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [choicesList, setChoiceList] = useState([]);
  const [userChoice, setUserChoice] = useState("");
  const [message, setMessage] = useState("");
  const [points, setPoints] = useState(0);
  const [round, setRound] = useState(0);

  useEffect(() => {
    async function getCountries() {
      try {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );

        setCountries(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCountries();
  }, []);

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
      console.log(fakeRandomCountry);
      choicesList.push(countries[fakeRandomCountry].name);
    }
    choicesList.push(chooseRightCountry());
    return choicesList;
  };

  const checkGameOver = () => {
    const maxRounds = 5;
    if (round >= maxRounds) {
      return true;
    }

    return false;
  };

  return (
    <div>
      <p>{selectedCountry.name}</p>

      <Choices
        choicesList={choicesList}
        selectedCountry={selectedCountry}
        onUserChoice={handleUserChoice}
        userChoice={userChoice}
      />
      <button
        disabled={checkGameOver()}
        className="btn-next"
        onClick={handleNextCountry}
      >
        Next country
      </button>
      <MsgDisplay message={`Points: ${points}`} size="medium" />
      <ShowFlag flag={selectedCountry.flag} />
      <MsgDisplay message={message} size="big" />
    </div>
  );
};

export default Main;
