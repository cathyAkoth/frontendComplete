import React from "react";
import possibilityImage from "./../../../assets/possibility.png";
import "./possibility.css";
// import Feed from './../../feed';

const Possibility = () => (
  <div className="mkz__possibility section__padding" id="possibility">
    <div className="mkz__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="mkz__possibility-content">
      <h1 className="gradient__text">Win-Win For All...</h1>
      <h4 className="gradient__text">
        Candidates Sign up for free... Employers experience a hustle free
        decision making!
      </h4>
    </div>
  </div>
);

export default Possibility;
