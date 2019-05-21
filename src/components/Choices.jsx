import React from "react";
import "./Choices.scss";

const Choices = props => {
  const getCheckedStatus = country => {
    return country === props.userChoice ? true : false;
  };

  const getClass = country => {
    if (props.userChoice) {
      return country === props.selectedCountry.name
        ? "choices__list-label-right correct"
        : "choices__list-label-wrong";
    }
  };

  return (
    <section className="choices">
      <form className="choices__list">
        {props.choicesList.map((country, index) => {
          return (
            <li key={index} className="choices__list-li">
              <input
                disabled={props.userChoice || props.checkGameOver()}
                className="choices__list-radio"
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
                className={`choices__list-label ${getClass(country)} `}
              >
                {country}
              </label>
            </li>
          );
        })}
      </form>
    </section>
  );
};
export default Choices;
