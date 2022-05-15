import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Tab } from "@material-ui/core";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import Signin from "../signin";
import Register from "../register";

const RegisterLoginBox = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="signin-register section__padding">
        <div className="register-advantage">
          <div className="previous-page" onClick={() => navigate(-1)}>
            <i className="fa pr-2 fa-arrow-left" />
            <span>Select Role</span>
          </div>
          <div className="benefits">
            <h2>Why would you sign up with Mukozi</h2>
            <p>
              Mukozi Protection has you covered from click to delivery. Sign up
              or sign in and you will be able to:
            </p>
            <ul>
              <li>
                <i className="icofont-check" />
                Speed your way through checkout
              </li>
              <li>
                <i className="icofont-check" />
                Track your shortlists easily
              </li>
              <li>
                <i className="icofont-check" />
                Keep a record of all your choices
              </li>
            </ul>
          </div>
          <div className="benefits-banner">
            <div className="benefits-banner-inner">
              <div className="banner-icon">
                <i className="fa-solid fa-bullhorn"></i>
              </div>
              <div className="banner-content">
                <h3>Get email notifications about upcoming offers!</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="signin-register-forms">
          <Box sx={{ width: "", typography: "body1" }}>
            <TabContext value={value}>
              <Box>
                <TabList
                  variant="fullWidth"
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleChange}
                >
                  <Tab label="Sign In" value="1" />
                  <Tab label="Register" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Signin />
              </TabPanel>
              <TabPanel value="2">
                <Register />
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </>
  );
};

export default RegisterLoginBox;
