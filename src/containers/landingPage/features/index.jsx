import React from "react";
import { Feature } from "components";
import "./features.css";

const featuresData = [
  {
    title: "Simplicity and flexibility",
    text: "We know hiring a domestic helper can be a painful experience: lack of candidate choices, hidden fees, and unclear hiring process. That's why Mukozi was founded. Our goal is to provide a transparent recruitment platform where employers and domestic helpers get what they are expecting.",
  },
  {
    title: "Trusthworthy and affordable",
    text: "We aim to create a strong and reliable social network because we understand that you can’t have your loved ones looked after by just anyone. Thanks to Facebook integration, you can see which of your friends have already reviewed our candidates. With online reviews, profile verifications and a link to Facebook, Mukozi has given a 21st-century makeover to the traditional domestic helper recruitment.",
  },
  {
    title: "Our social mission",
    text: "For decades traditional employment agency fees have been creating a cycle of debt bondage that follows many domestic helpers throughout their employment. Our platform eliminates intermediaries in the recruitment process, making sure the process is transparent, and without any hidden fee, for both the domestic helpers and the employers.",
  },
  {
    title: "Partners",
    text: "We work with ethical agencies which prompt not to charge domestic helpers unnecessary fees for any paperwork involved in processing.",
  },
];

const Features = () => (
  <div className="mkz__features section__padding" id="features">
    <div className="mkz__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today & Make it Happen.
      </h1>
      {/* <p>Request Early Access to Get Started</p> */}
    </div>
    <div className="mkz__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
