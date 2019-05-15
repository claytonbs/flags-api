import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowFlag from "./ShowFlag";
import Choices from "./Choices";
import MsgDisplay from "./MsgDisplay";

import "./Main.css";

const Main = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
  const [choicesList, setChoiceList] = useState([]);
  const [userChoice, setUserChoice] = useState("");
  const [message, setMessage] = useState("");

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
    console.log(choice, selectedCountry);
    setUserChoice(choice);
    if (choice === selectedCountry.name) {
      setMessage("Right answer!");
    } else {
      setMessage("Wrong answer!");
    }
  };

  const chooseRightCountry = () => {
    const randomCountry = Math.floor(Math.random() * (countries.length - 1));

    setSelectedCountry(countries[randomCountry]);
    return countries[randomCountry].name;
  };

  const handleNewCountry = () => {
    setUserChoice("");

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
    setChoiceList(choicesList);
  };

  return (
    <div>
      <p>{selectedCountry.name}</p>

      <button onClick={handleNewCountry}>New country</button>
      <Choices
        choicesList={choicesList}
        onUserChoice={handleUserChoice}
        userChoice={userChoice}
      />
      <ShowFlag flag={selectedCountry.flag} />
      <MsgDisplay message={message} size="big" />
    </div>
  );
};

export default Main;
