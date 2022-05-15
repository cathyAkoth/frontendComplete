import React from "react";
import people from "assets/people.png";
// import ai from '../../assets/ai.png';
import maid2 from "assets/maid2.png";
import "./header.css";

const Header = () => (
  <div className="mkz__header section__padding" id="home">
    <div className="mkz__header-content">
      <h1 className="gradient__text">
        Let&apos;s Help you Hire Domestic Helpers Easily, Fast, and Secure
      </h1>
      <p>
        You don&apos;t need to ask people in the neighborhood if they know of
        someone looking for work or wait around unsure about whether your
        domestic helper will come. All thanks to Mukozi.com, a home service
        provider that sends trained domestic helpers to your place on demand.
      </p>

      <div className="mkz__header-content__input">
        <button type="button">Get Started</button>
      </div>

      <div className="mkz__header-content__people">
        <img src={people} alt="" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="mkz__header-image">
      <img src={maid2} alt="" className="img-responsive" />
    </div>
  </div>
);

export default Header;
