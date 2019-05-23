import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = ({ onNewGame, game: { points } }) => {
  return (
    <nav className="nav">
      <ul className="nav-container">
        <NavLink to="/">
          <li onClick={onNewGame} className="nav-container__item">
            New game
          </li>
        </NavLink>

        <NavLink to="/">
          <li className="nav-container__item">Main</li>
        </NavLink>

        <NavLink to="/ranking">
          <li className="nav-container__item">Ranking</li>
        </NavLink>
      </ul>

      <ul className="nav-container">
        <li className="nav-container__item nav-container__info">{`Points: ${points}`}</li>
      </ul>
    </nav>
  );
};

export default Nav;
