import React from "react";
import { Feature } from "components";
import "./howWorks.css";

const HowWorks = () => (
  <div className="mkz__whatmkz section__margin">
    <div className="mkz__whatmkz-heading">
      <h1 className="gradient__text">How It Works</h1>
    </div>
    <div className="mkz__whatmkz-container">
      <Feature
        number="1"
        title="Register for free"
        text="At Mukozi, the job search is completely online. Sign up for free."
      />
      <Feature
        number="2"
        title="Choose the hiring package"
        text="With the features that fit your needs."
      />
      <Feature
        number="3"
        title="Search and Screen"
        text="Browse through our ever-increasing database of verified profiles of domestic helpers and filter the search to suit requirements."
      />
      <Feature
        number="4"
        title="Our Due Diligence"
        text="We invite your helper(s) to our office and deliver the necessary documents to you directly! Our team shall do the due diligence of interviewing, training and readying your domestic helper(s). We liaise with your choice and arrange transportation depending on location. All terms are not changed as is stipulated in the Terms of Service."
      />
    </div>
  </div>
);

export default HowWorks;
