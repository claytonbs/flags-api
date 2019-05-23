import React from "react";
import "./Choices.scss";

const Choices = props => {
  const getCheckedStatus = country => {
    return country === props.game.userChoice ? true : false;
  };

  const getClass = country => {
    if (props.game.userChoice) {
      return country === props.game.choicesList.selectedCountry.name
        ? "choices__list-label-right correct"
        : "choices__list-label-wrong";
    }
  };

  return (
    <section className="choices">
      <form className="choices__list">
        {props.game.choicesList.choicesCountries.map((country, index) => {
          return (
            <li key={index} className="choices__list-li">
              <input
                disabled={props.game.userChoice || props.checkGameOver()}
                className="choices__list-radio"
                type="radio"
                name="country"
                id={country.name}
                value={country}
                onChange={() => {
                  props.onUserChoice(country.name);
                }}
                checked={getCheckedStatus(country.name)}
              />
              <label
                htmlFor={country.name}
                className={`choices__list-label ${getClass(country.name)} `}
              >
                {country.name}
              </label>
            </li>
          );
        })}
      </form>
    </section>
  );
};
export default Choices;
