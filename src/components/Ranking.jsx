import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Ranking.scss";

const Ranking = () => {
  const [ranking, setRanking] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3005/api");
        response.data.sort((a, b) => b.points - a.points);
        response.data.forEach((player, index) => (player.position = index + 1));
        setRanking(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  //pagination
  const entriesPerPage = 5;
  const numberOfPages = Math.ceil(ranking.length / entriesPerPage);
  const pageCalc = (pageNumber - 1) * entriesPerPage;
  const rankingPagination = [];

  for (let i = pageCalc; i < pageCalc + entriesPerPage; i++) {
    if (ranking[i]) {
      rankingPagination.push(ranking[i]);
    }
  }
  const pageIndex = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pageIndex.push(i);
  }

  const handlePagination = page => {
    setPageNumber(page);
  };

  const getActiveClass = page => {
    if (page === pageNumber) {
      return " active";
    } else {
      return null;
    }
  };

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
          {rankingPagination.map((entry, index) => {
            return (
              <tr key={index} className="ranking-row">
                <td className="ranking-data">{entry.position}</td>
                <td className="ranking-data">{entry.firstName}</td>
                <td className="ranking-data">{entry.lastName}</td>
                <td className="ranking-data">{entry.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <ul className="ranking-pagination">
        {pageIndex.map(page => (
          <li
            key={page}
            className={`ranking-page ${getActiveClass(page)}`}
            onClick={() => handlePagination(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Ranking;
