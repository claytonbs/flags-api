import React, { useState } from "react";
import Btn from "./Btn";
import "./RankingForm.scss";

const RankingForm = props => {
  const [newEntry, setNewEntry] = useState({
    firstName: "",
    lastName: "",
    points: 0
  });

  const handleSubmit = e => {};

  return (
    <section className="ranking-form">
      <div className="form-container">
        <h2 className="form-title">Please enter your name</h2>
        <form onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <input
              className="form-group__input"
              placeholder="First name"
              id="first-name"
              autocomplete="off"
              value={newEntry.firstName}
              onChange={event => {
                setNewEntry({ ...newEntry, firstName: event.target.value });
              }}
              required
            />
            <label className="form-group__label" for="first-name">
              First Name
            </label>
          </div>
          <div className="form-group">
            <input
              className="form-group__input"
              placeholder="Last name"
              required
              autocomplete="off"
              value={newEntry.lasttName}
              onChange={event => {
                setNewEntry({ ...newEntry, lastName: event.target.value });
              }}
              required
            />
            <label className="form-group__label" for="last-name">
              Last Name
            </label>
          </div>
          <Btn align="left" content="Enter for the history!" />
        </form>
      </div>
    </section>
  );
};

export default RankingForm;
