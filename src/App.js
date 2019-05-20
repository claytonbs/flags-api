import React, { useState } from "react";

import Game from "./components/Game";
import Landing from "./components/Landing";

function App() {
  const [isRunning, setIsRunning] = useState(false);

  const startGame = () => {
    setIsRunning(true);
  };

  return (
    <React.Fragment>
      {isRunning ? <Game /> : <Landing startGame={startGame} />}
    </React.Fragment>
  );
}

export default App;
