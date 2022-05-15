import { useState } from "react";
import "./reset.css";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  InputAdornment,
  IconButton,
  Box,
} from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #042c54",
  boxShadow: 24,
  p: 4,
};

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

const ResetPassword = () => {
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

  return (
    <div>
      <Box sx={style}>
        <div className="modal-title">
          <h2 id="modal-title">Reset Password</h2>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(JSON.stringify(values, null, 2));
            localStorage.setItem("formValues", JSON.stringify(values));
            navigate("/candidate", { replace: true });
          }}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit} className={classes.root}>
              <Grid container>
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

                <div className="bottom">
                  <Button
                    className="custom-btn"
                    variant="contained"
                    type="submit" // endIcon={<SendIcon />}
                  >
                    Reset Password
                  </Button>
                </div>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default ResetPassword;
