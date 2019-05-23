import React, { useState } from "react";

import Game from "./components/Game";
import Landing from "./components/Landing";

import "./App.scss";

function App() {
  const [isRunning, setIsRunning] = useState(false);

  const startGame = () => {
    setIsRunning(true);
  };

  return (
    <div className="app">
      {isRunning ? <Game /> : <Landing startGame={startGame} />}
    </div>
  );
}

export default App;
