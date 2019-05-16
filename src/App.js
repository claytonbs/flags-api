import React from "react";
import { Route } from "react-router-dom";

import Nav from "./components/Nav";
import Main from "./components/Main";
import Ranking from "./components/Ranking";

import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Route exact path="/" component={Main} />
      <Route exact path="/ranking" component={Ranking} />
    </React.Fragment>
  );
}

export default App;
