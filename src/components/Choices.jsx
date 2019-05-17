import React from "react";
import "./Choices.scss";

const Choices = props => {
  const getCheckedStatus = country => {
    console.log(country, props.userChoice);
    if (country === props.userChoice) {
      return true;
    }

    return false;
  };

  const getClass = country => {
    if (country === props.selectedCountry.name) {
      return "choice-list__label-right";
    } else {
      return "choice-list__label-wrong";
    }
  };

  return (
    <div>
      <form className="choice-list">
        {props.choicesList.map((country, index) => {
          return (
            <li key={index} className="choice-list__li">
              <input
                disabled={props.userChoice || props.checkGameOver()}
                className="choice-list__radio"
                type="radio"
                name="country"
                id={country}
                value={country}
                onChange={() => {
                  props.onUserChoice(country);
                }}
                checked={getCheckedStatus(country)}
              />
              <label
                htmlFor={country}
                className={`choice-list__label ${getClass(country)}`}
              >
                {country}
              </label>
            </li>
          );
        })}
      </form>
    </div>
  );
};
export default Choices;
