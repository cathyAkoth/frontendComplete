import { Feature } from "components";
import "./whatMukozi.css";

const WhatMukozi = () => (
  <div className="mkz__whatmkz section__margin" id="wgpt3">
    <div className="mkz__whatmkz-feature">
      <Feature
        title="What is Mukozi"
        text="We are a platform that provides a fast, convenient, safe, and reliable avenue to domestic helpers (maids) seeking suitable employment and match them with households(employers) who need them."
      />
    </div>
    <div className="mkz__whatmkz-heading">
      <h1 className="gradient__text">
        The possibilities at Mukozi are beyond your imagination
      </h1>
      {/* <p>Explore the Library</p> */}
    </div>
    <div className="mkz__whatmkz-container">
      <Feature
        title="Register for free"
        text="At Mukozi, the job search is completely online. Register on our platform to post your CV with no charges and build your candidate profile for employers to browse. Set your own expectations according to your skills and needs."
      />
      <Feature
        title="Search and Screen"
        text="Mukozi offers a transparent and ethical platform for employers and domestic helpers to match with each other. We do not have any hidden fees and never charge helpers. Browse through our ever-increasing database of verified profiles of domestic helpers and filter the search to suit your needs and requirements."
      />
      <Feature
        title="Submit"
        text="After deciding which domestic helper to hire, submit choice.
          Our team shall do the due diligence of interviewing, training and readying your domestic helper(s). We liaise with your choice and arrange transportation depending on location. All terms are not changed as is stipulated in the Terms of service."
      />
    </div>
  </div>
);

export default WhatMukozi;
