import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = props => {
  return (
    <nav className="nav">
      <ul className="nav-container">
        <NavLink to="/">
          <li onClick={props.onNewGame} className="nav-container__item">
            New game
          </li>
        </NavLink>
        <NavLink to="/ranking">
          <li className="nav-container__item">Ranking</li>
        </NavLink>
        <NavLink to="/">
          <li className="nav-container__item">Back</li>
        </NavLink>
      </ul>

      <ul className="nav-container">
        <li className="nav-container__item nav-container__info">{`Points: ${
          props.points
        }`}</li>
      </ul>
    </nav>
  );
};

export default Nav;
