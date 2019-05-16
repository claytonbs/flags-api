import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = props => {
  return (
    <nav>
      <ul className="nav-container">
        <li className="nav-container__item">New game</li>
        <NavLink to="/ranking">
          {" "}
          <li className="nav-container__item">Ranking</li>
        </NavLink>
        <NavLink to="/">
          <li className="nav-container__item">Back</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
