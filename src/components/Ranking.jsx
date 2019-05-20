import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Ranking.scss";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    (async () => {
      console.log("fetch ranking");
      try {
        const response = await axios.get("http://localhost:3000/api");

        setRanking(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <section className="ranking">
      <h2 className="ranking__title">Ranking</h2>
      <table className="ranking-container">
        <thead className="ranking-head">
          <tr className="ranking-head__row">
            <th className="ranking-data">#</th>
            <th className="ranking-data">First Name</th>
            <th className="ranking-data">Last Name</th>
            <th className="ranking-data">Points</th>
          </tr>
        </thead>
        <tbody className="ranking-body">
          {ranking.map((entry, index) => {
            return (
              <tr key={index} className="ranking-row">
                <td className="ranking-data">{index + 1}</td>
                <td className="ranking-data">{entry.firstName}</td>
                <td className="ranking-data">{entry.lastName}</td>
                <td className="ranking-data">{entry.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Ranking;
