import React, { useState } from "react";
import Game from "./components/Game";
import Landing from "./components/Landing";
import "./App.scss";

function App() {
  const [isRunning, setIsRunning] = useState(false);

  const onstartGame = () => {
    setIsRunning(true);
  };

  return (
    <div className="app">
      {isRunning ? <Game /> : <Landing onStartGame={onstartGame} />}
    </div>
  );
}

export default App;
