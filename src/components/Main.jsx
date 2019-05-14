import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [flags, setFlags] = useState([]);
  const [selectedFlag, setSelectedFlag] = useState({});

  useEffect(() => {
    async function getFlags() {
      try {
        const response = await axios.get(
          "https://restcountries.eu/rest/v2/all"
        );

        setFlags(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getFlags();
  }, []);

  const handleNewFlag = () => {
    const randomFlag = Math.floor(Math.random() * 249);
    console.log(flags);
    setSelectedFlag(flags[randomFlag]);
  };

  return (
    <div>
      <p>{selectedFlag.name}</p>

      <button onClick={handleNewFlag}>New flag</button>
    </div>
  );
};

export default Main;
