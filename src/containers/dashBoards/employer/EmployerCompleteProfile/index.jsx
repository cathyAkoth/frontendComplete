import "./employer.css";
import * as yup from "yup";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FormControls from "components/formControls";
import * as constants from "assets/data/constants";

const EmployerCompleteProfile = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="wrapper section__padding">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MultiStepForm
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            nationality: "",
            countryOfResidence: "",
            district: "",
            companyName: "",
            companyAddress: "",
            // regCertificate: "",
          }}
          onSubmit={async (values) => {
            await sleep(300);
            window.alert(JSON.stringify(values, 0, 2));
            // alert(JSON.stringify(values, null, 2));
          }}
        >
          {
            <FormStep
              stepName="Personal Details"
              onSubmit={() => console.log("Step1 submit")}
              validationSchema={yup.object({
                firstName: yup
                  .string()
                  .min(2, "Too Short!")
                  .max(50, "Too Long!")
                  .required("First Name is required"),
                lastName: yup
                  .string()
                  .min(2, "Too Short!")
                  .max(50, "Too Long!")
                  .required("Last Name is required"),
                email: yup.string().email().required("Email is required"),
                phoneNumber: yup
                  .string()
                  .max(13, "Must be 13 characters")
                  .required("Phone Number is required")
                  .matches(/^\+256[0-9]{9}$/, "Contact format is +256..."),
                nationality: yup
                  .string()
                  .oneOf(constants.NATIONALITY(), "Invalid Nationality")
                  .required("Select Nationality"),
                countryOfResidence: yup
                  .string()
                  .oneOf(constants.COUNTRIES(), "Invalid Country")
                  .required("Select Present Country of Residence"),
                district: yup
                  .string()
                  .oneOf(constants.DISTRICTS(), "Invalid District")
                  .required("Select Present District of Residence"),
              })}
            >
              <nav className="row nav-text nav-content">
                <p className="col-12 rounded border">
                  Provide the required details to be able to explore all the
                  onlince candidate profiles.
                </p>
              </nav>
              <header
                className="form-header"
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                <h5>Personal Information</h5>
              </header>

              {/* Personal Information */}
              <Grid container spacing={3}>
                <Grid item sm={6}>
                  <FormControls.Select
                    name="type"
                    label="Employer Type"
                    options={constants.ROLE()}
                  />
                  <FormControls.Input name="firstName" label="First Name" />
                  <FormControls.Input name="lastName" label="Last Name" />
                  <FormControls.Input name="email" label="Email" />
                  <FormControls.Input name="phoneNumber" label="Phone Number" />
                </Grid>
                <Grid item sm={6}>
                  <FormControls.Select
                    name="nationality"
                    label="Nationality"
                    options={constants.NATIONALITY()}
                  />
                  <FormControls.Select
                    name="countryOfResidence"
                    label="Present Country"
                    options={constants.COUNTRIES()}
                  />
                  <FormControls.Select
                    name="district"
                    label="District"
                    options={constants.DISTRICTS()}
                  />
                </Grid>
              </Grid>
              <header
                className="form-header"
                style={{ marginBottom: "1rem", marginTop: "1rem" }}
              >
                <h5>Details</h5>
              </header>
              <Grid container spacing={3}>
                <Grid item sm={6}>
                  <FormControls.Input name="adress" label="Address" />
                </Grid>
                <Grid item sm={6}>
                  <Button variant="contained" component="label" color="primary">
                    {" "}
                    <AddIcon /> Upload National ID
                    <input type="file" hidden />
                  </Button>
                </Grid>
              </Grid>
            </FormStep>
          }

          {/* Professional Information */}

          <FormStep
            stepName="Professional Information"
            onSubmit={() => console.log("Step2 submit")}
            validationSchema={yup.object({
              companyName: yup
                .string()
                .min(2, "Too Short!")
                .max(50, "Too Long!")
                .required("Company Name is required"),
              companyAddress: yup
                .string()
                .min(2, "Too Short!")
                .max(50, "Too Long!")
                .required("Company Name is required"),
            })}
          >
            <header
              className="form-header"
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
            >
              <h5>Professional Information</h5>
            </header>
            <Grid container spacing={3}>
              <Grid item sm={6}>
                <FormControls.Input name="companyName" label="Company Name" />
                <FormControls.Input
                  name="companyAddress"
                  label="Company Address"
                />
              </Grid>
              <Grid item sm={6}>
                <Button variant="contained" component="label" color="primary">
                  {" "}
                  <AddIcon /> Upload Registration Certificate
                  <input type="file" hidden />
                </Button>
              </Grid>
            </Grid>
          </FormStep>
        </MultiStepForm>
      </LocalizationProvider>
    </div>
  );
};

export default EmployerCompleteProfile;
