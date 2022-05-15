import { useState } from "react";
import { Form, Formik } from "formik";
import * as yup from "yup";
import { styled } from "@material-ui/styles";
import { Container, Col, Button, Row, Modal } from "react-bootstrap";
import {
  Grid,
  TextField,
  makeStyles,
  Paper,
  Box,
  Input,
} from "@material-ui/core";
import PageHeader from "./PageHeader";
// import Controls from "./controls/Controls";
// import { useForm, Form } from "./useForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      // width: "80%",
      margin: theme.spacing(1),
    },
  },
}));

const initialFValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

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

const CandidateForm = () => {
  const [values, setValues] = useState(initialFValues);

  const classes = useStyles();

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
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
                id="phoneNumber"
                name="phoneNumber"
                label="+256..."
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
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

              <Button
                className="custom-btn"
                variant="contained"
                type="submit" // endIcon={<SendIcon />}
              >
                Sign Up
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
      <form className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              label="Full Name"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default CandidateForm;
