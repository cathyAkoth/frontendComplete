import React from "react";
import "./footer.css";

const Footer = () => (
  <div className="mkz__footer section__padding">
    {/* remove this div */}
    {/* <div className="mkz__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="mkz__footer-btn">
      <p>Request Early Access</p>
    </div> */}

    <div className="mkz__footer-links">
      <div className="mkz__footer-links_logo">
        Mukozi
        <p>
          BMK House, 8th Floor Suite 806, <br />
          Kampala, Uganda <br /> All Rights Reserved
        </p>
      </div>
      <div className="mkz__footer-links_div">
        <h4>Quick Links</h4>
        <p>Social Media</p>
      </div>
      <div className="mkz__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="mkz__footer-links_div">
        <h4>Get in touch</h4>
        <p>BMK House, 8th Floor Suite 806b</p>
        <p>+256 750 930841</p>
        <p>info@mukozi.com</p>
      </div>
    </div>

    <div className="mkz__footer-copyright">
      <p>&copy; 2022 Mukozi. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
