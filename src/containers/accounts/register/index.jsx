import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../accounts.css";
import {
  Grid,
  TextField,
  makeStyles,
  Button,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import axios from "axios";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
    btn: {
      width: "100%",
      height: "3rem",
      background: "red",
      color: "#fff",
      "&:hover": {
        background: "red",
      },
    },
  },
}));

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required("Please enter your First Name")
    .matches(/^[a-zA-Z ]*$/, "Name should only be letters"),
  lastName: yup
    .string()
    .required("Please enter your Last Name")
    .matches(/^[a-zA-Z ]*$/, "Name should only be letters"),
  phoneNumber: yup
    .string()
    .max(13, "Must be 13 characters")
    .required("Phone number is Required")
    .matches(/^\+256[0-9]{9}$/, "Contact format is +256..."),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("No password provided")
    .min(3, "Seems abit short ...")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
});

const Register = () => {
  const location = useLocation();
  var role = location.pathname;
  const navigate = useNavigate();
  const classes = useStyle();
  const [showPasswordValue, setShowPasswordValue] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setShowPasswordValue({
      showPassword: !showPasswordValue.showPassword,
    });
  };

  const url = "http://localhost:5000/signup";

  return (
    <>
      {/* <div className="social-icons">
        <ul>
          <li>
            <a href="">
              <i aria-hidden="true" className="fa fa-facebook content" />
            </a>
          </li>
          <li>
            <a href="">
              <i
                aria-hidden="true"
                className="fa fa-google content"
                style={{ backgroundColor: "#de5246" }}
              />
            </a>
          </li>
        </ul>
      </div> */}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNo: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log("CLICKED.....");
          axios
            .post(url, values)
            .then((res) => {
              navigate("/dashboard/candidate", { replace: true });
            })
            .catch((error) => {
              console.log("An error accured from: ", error);
            });
          // console.log(JSON.stringify(values, null, 2));
          // localStorage.setItem("formValues", JSON.stringify(values));
          // navigate("/dashboard/candidate", { replace: true });
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} className={classes.root}>
            <Grid container>
              <TextField
                variant="outlined"
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                variant="outlined"
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <TextField
                variant="outlined"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                variant="outlined"
                id="phoneNo"
                name="phoneNo"
                label="phoneNo"
                value={formik.values.phoneNo}
                onChange={formik.handleChange}
                error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
                helperText={formik.touched.phoneNo && formik.errors.phoneNo}
              />
              <TextField
                variant="outlined"
                id="password"
                name="password"
                label="Password"
                value={formik.values.password}
                autoComplete="on"
                onChange={formik.handleChange}
                type={showPasswordValue.showPassword ? "text" : "password"}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPasswordValue.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button className="custom-btn" variant="contained" type="submit">
                Sign Up
              </Button>
              <p className="text__small">
                By creating an account, you agree to the{" "}
                <Link to="/my-account/terms">Terms of Service</Link>. For more
                information about Mukozi's privacy practices, see the Mukozi{" "}
                <Link to="/my-account/privacy">Privacy Policy</Link>. We'll
                occasionally send you account-related emails.
              </p>
            </Grid>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Register;
