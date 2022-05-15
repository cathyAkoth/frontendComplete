import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { NotificationsNone, Language } from "@material-ui/icons";

const Navbar = ({ isEmployer }) => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const [mkz__navbar, setMkz__navbar] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 70) {
      setMkz__navbar(true);
    } else {
      setMkz__navbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);

  // const [dropdown, setDropdown] = useState(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // }

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // }

  return (
    <div className={mkz__navbar ? "mkz__navbar active" : "mkz__navbar"}>
      <div className="mkz__navbar-links">
        <Link to="/" className="link">
          <div className="navbar-links_logo">
            Mukozi{/* <img src={logo} /> */}
          </div>
        </Link>
        <div className="mkz__navbar-links_container">
          <Link to="/" className="link">
            <p>Home</p>
          </Link>
          <p>
            <a href="/#wgpt3">About Us</a>
          </p>
          <p>
            <a href="#possibility">Jobs</a>
          </p>
          <p>
            <a href="#features">Features</a>
          </p>
          {location.pathname === "/" ? null : (
            <>
              <Link to="dashboard/employer/find-candidate">
                <p>Candidates</p>
              </Link>
              <Link to="dashboard/employer/pricing">
                <p>Pricing</p>
              </Link>
            </>
          )}

          <Link to="#contact" className="link">
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
      <div className="mkz__navbar-sign">
        {location.pathname === "/" && (
          <>
            <Link to="my-account" className="link">
              <p>Sign in ...or</p>
            </Link>
            <Link to="my-account" className="link">
              <button type="button">Sign Up</button>
            </Link>
          </>
        )}
      </div>
      <Link to="/signin" className="link">
        {location.pathname !== "/" ? (
          <>
            <div className="mkz__navbar-sign">
              <Link to="/" className="link">
                <div className="navbarIconContainer">
                  <NotificationsNone />
                  <span className="navIconBadge">2</span>
                </div>
              </Link>
              <Link to="/" className="link">
                <div className="navbarIconContainer">
                  <Language />
                  <span className="navIconBadge">2</span>
                </div>
              </Link>
              <img
                src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="navAvatar"
              />
            </div>
          </>
        ) : null}
      </Link>
      <div className="mkz__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="mkz__navbar-menu_container scale-up-center">
            <div className="mkz__navbar-menu_container-links">
              <Link to="/" className="link">
                <p>Home</p>
              </Link>
              <p>
                <a href="#wmkz">About Us</a>
              </p>
              <p>
                <a href="#possibility">Jobs</a>
              </p>
              <p>
                <a href="#features">Features</a>
              </p>
            </div>
            <div className="mkz__navbar-menu_container-links-sign">
              <p>Sign in or</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
