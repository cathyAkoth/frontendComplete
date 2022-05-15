import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  InputAdornment,
  IconButton,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Modal,
  Backdrop,
} from "@material-ui/core";
import "./../accounts.css";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import ResetPassword from "../resetPassword";

const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

// const BoldLink = styled.a`
//   font-size: 12px;
//   color: #ff4820;
//   font-weight: 500;
//   text-decoration: none;
//   margin: 0 4px;
// `;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const validationSchema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("No password provided")
    .min(3, "Seems abit short ...")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
});

const Signin = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  //Password visibility toggle handler
  const [showPasswordValue, setShowPasswordValue] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setShowPasswordValue({
      showPassword: !showPasswordValue.showPassword,
    });
  };

  //Reset password modal controls
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(JSON.stringify(values, null, 2));
          localStorage.setItem("formValues", JSON.stringify(values));
          navigate("/dashboard/candidate", { replace: true });
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} className={classes.root}>
            <Grid container>
              <MutedLink>
                Don't have an account? Click Register above!
              </MutedLink>
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
                id="password"
                name="password"
                label="Password"
                value={formik.values.password}
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
              <div className="pwd-bottom">
                <div className="rememberme">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label="Keep me signed in!"
                    />
                  </FormGroup>
                </div>
                <div className="forgot-password text-right">
                  <span onClick={handleOpen}>Forgot Password?</span>
                </div>
              </div>

              <div className="bottom">
                <Button
                  className="custom-btn"
                  variant="contained"
                  type="submit" // endIcon={<SendIcon />}
                >
                  Sign In
                </Button>
                <MutedLink>
                  Don't have an account? Click Register above!
                </MutedLink>
              </div>
            </Grid>
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <ResetPassword />
              </Modal>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Signin;
