import React, { useState } from "react";
import axios from "axios";
import Btn from "./Btn";
import "./RankingForm.scss";

const RankingForm = props => {
  const [newEntry, setNewEntry] = useState({
    firstName: "",
    lastName: "",
    points: props.points
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api", newEntry);

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  //const handleSubmit = e => {
  //e.preventDefault();
  //props.updateRanking(newEntry);
  //};

  return (
    <React.Fragment>
      <section onClick={props.hideRankingForm} className="ranking-patch" />
      <section className="ranking-form">
        <div className="form-container">
          <h2 className="form-title">Please enter your name</h2>
          <form onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
              <input
                className="form-group__input"
                placeholder="First name"
                id="first-name"
                autoComplete="off"
                value={newEntry.firstName}
                onChange={event => {
                  setNewEntry({ ...newEntry, firstName: event.target.value });
                }}
                required
              />
              <label className="form-group__label" htmlFor="first-name">
                First Name
              </label>
            </div>
            <div className="form-group">
              <input
                className="form-group__input"
                placeholder="Last name"
                autoComplete="off"
                value={newEntry.lasttName}
                onChange={event => {
                  setNewEntry({ ...newEntry, lastName: event.target.value });
                }}
                required
              />
              <label className="form-group__label" htmlFor="last-name">
                Last Name
              </label>
            </div>
            <Btn align="left" content="Enter for the history!" />
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default RankingForm;
