import React from "react";
import { Link } from "react-router-dom";
import "./cta.css";

const CTA = () => (
  <div className="mkz__cta">
    <div className="mkz__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="mkz__cta-btn">
      <Link to="my-account">
        <button type="button">Get Started</button>
      </Link>
    </div>
  </div>
);

export default CTA;
