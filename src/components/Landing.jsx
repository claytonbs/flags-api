import React from "react";
import "./Landing.scss";

const Landing = props => {
  return (
    <section className="landing">
      <div className="landing__container">
        <h1 className="landing__title">Do you know the flags?</h1>
        <button className="landing__btn" onClick={props.startGame}>
          Start game
        </button>
      </div>
      <ul className="landing__slideshow">
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </section>
  );
};

export default Landing;
