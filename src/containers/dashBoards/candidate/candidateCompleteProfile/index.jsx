import "./style.css";
import * as yup from "yup";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import { Field } from "formik";
import { DatePicker } from "formik-mui-lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import FormControls from "components/formControls";
import * as constants from "assets/data/constants";

// const CustomSwitch = styled(Switch)(({ theme }) => ({
//   "& .MuiSwitch-switchBase.Mui-checked": {
//     color: "#FF8A71",
//     // "&:hover": {
//     //   backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
//     // },
//   },
//   "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
//     backgroundColor: "#81AFDD",
//   },
// }));

const CandidateCompleteProfile = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <div className="wrapper section__padding">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MultiStepForm
          initialValues={{
            firstName: "",
            lastName: "",
            age: "",
            phoneNumber: "",
            whatsAppNumber: "",
            email: "",
            nationality: "",
            countryOfResidence: "",
            district: "",
            maritalStatus: "",
            numberOfKids: "",
            religion: "",
            educationLevel: "",
            passport: "",
            workExperience: "",
            availability: null,
            jobLocation: "",
            description: "",
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
                whatsAppNumber: yup
                  .string()
                  .max(13, "Must be 13 characters")
                  .required("Whatsapp Number is required")
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
                age: yup.string().required("Select Your Age"),
                maritalStatus: yup.string().required("Select Marital Status"),
                numberOfKids: yup.string().required("Select Number of Kids"),
                religion: yup.string().required("Select Religion"),
                educationLevel: yup.string().required("Select Education Level"),
                passport: yup.boolean().required(),
                // .oneOf([true, false]),
              })}
            >
              <nav className="row nav-text nav-content">
                <p className="col-12 rounded border">
                  100% Free! Create your onlince profile and expose yourself to
                  the convinient employers.
                </p>
              </nav>
              <header className="form-header">
                <h5>Personal Information</h5>
              </header>
              <div className="col-md-12 img-upload">
                <label className="col-12">
                  <strong>Choose Appropriate Photo *</strong>
                </label>
                <div className="photo-wrap">
                  <image-uploader>
                    <label
                      className="uploader"
                      style={{ outlineColor: "rgb(235, 186, 22)" }}
                    >
                      <span className="img-content-text">
                        <i aria-hidden="true" className="fa fa-upload mb-4"></i>
                        <br />
                        <span className="img-text">
                          Choose a nice & professional picture to get more
                          attraction! Please no one else on your picture!
                        </span>
                      </span>
                    </label>
                  </image-uploader>
                </div>
              </div>

              {/* Personal Information */}
              <Grid container spacing={3}>
                <Grid item sm={6}>
                  <FormControls.Input name="firstName" label="First Name" />
                  <FormControls.Input name="lastName" label="Last Name" />
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
                <Grid item sm={6}>
                  <FormControls.Select
                    name="age"
                    label="Age"
                    options={constants.AGE()}
                  />
                  <FormControls.Select
                    name="maritalStatus"
                    label="Marital Status"
                    options={constants.MARITAL_STATUS()}
                  />
                  <FormControls.Select
                    name="numberOfKids"
                    label="No. of Kids"
                    options={constants.KIDS()}
                  />
                  <FormControls.Select
                    name="religion"
                    label="Religion"
                    options={constants.RELIGION()}
                  />
                  <FormControls.Select
                    name="educationLevel"
                    label="Education Level"
                    options={constants.EDUCATION()}
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
                  <FormControls.Input name="email" label="Email" />
                  <FormControls.Input name="phoneNumber" label="Phone Number" />
                  <FormControls.Input
                    name="whatsAppNumber"
                    label="WhatsApp Number"
                  />
                </Grid>
                <Grid item sm={6}>
                  <FormControls.Checkbox
                    name="passport"
                    label="Do you have a valid passport"
                  />
                  {/* <FormControlLabel
                    control={<CustomSwitch color="primary" />}
                    name="passport"
                    type="checkbox"
                    label="Do you have a valid passport"
                  /> */}
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
              workExperience: yup.string().required("State work experience"),
              availability: yup
                .date()
                .nullable()
                .required("Select availability date"),
              jobLocation: yup
                .string()
                .required("Select prefered job location"),
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
                <FormControls.Input
                  name="workExperience"
                  type="number"
                  label="Years of Working Experience"
                  // min={0}
                  // max={5}
                />
                <Field
                  width="100%"
                  component={DatePicker}
                  name="availability"
                  label="When Can You Start?"
                />
              </Grid>
              <Grid item sm={6}>
                {/* <FormControls.Select
                name="age"
                label="Age"
                options={constants.AGE()}
              /> */}
              </Grid>
            </Grid>
            <header
              className="form-header"
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
            >
              <h5>Your Preferences for Job</h5>
            </header>
            <Grid container spacing={3}>
              <Grid item sm={6}>
                <FormControls.Select
                  name="jobLocation"
                  label="Preferred Job Location"
                  options={constants.COUNTRIES()}
                />
                {/* <FormControls.SelectCheck
                  name="jobLocation"
                  label="Prefered Job Location"
                  options={constants.COUNTRIES()}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                /> */}

                {/* <FormControls.WrappedSelect
                  label="Prefered Job Location"
                  options={options}
                  name="jobLocation"
                /> */}

                {/* <FormControl fullWidth size="small" variant="outlined">
                  <InputLabel>Prefered Job Location</InputLabel>
                  <Select
                    multiple
                    value={countryName}
                    name="jobLocation"
                    onChange={handleChange}
                    label="Prefered Job Location"
                    // input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    {countries.map((country) => (
                      <MenuItem key={country} value={country}>
                        <Checkbox checked={countryName.indexOf(country) > -1} />
                        <ListItemText primary={country} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl> */}
              </Grid>
              <Grid item sm={6}>
                {/* <FormControls.Select
                  name="employerType"
                  label="Employer Type"
                  options={constants.EMPLOYER_TYPE()}
                /> */}
              </Grid>
            </Grid>
          </FormStep>

          {/* <FormStep
            stepName="Experience & Skills"
            onSubmit={() => console.log("Step3 submit")}
            validationSchema={yup.object({
              // street: yup.string().required("Street name is required"),
              // country: yup.string().required("Select a country"),
            })}
          >
            <header
              className="form-header"
              style={{ marginBottom: "1rem", marginTop: "1rem" }}
            >
              <h5>My Skills/Duties</h5>
            </header>
            <div className="mini-header">
              <i className="fa-solid fa-earth-africa"></i>
              <span>Language(s)</span>
            </div>
            <Grid container spacing={3}>
              <Grid Item sm={6}>
                <div className="buttons-pills">
                  <Field
                    component={ToggleButtonGroup}
                    name="languages"
                    type="checkbox"
                  >
                    <ToggleButton value="left" aria-label="left aligned">
                      English
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                      Luganda
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                      Arabic
                    </ToggleButton>
                    <ToggleButton
                      value="justify"
                      aria-label="justified"
                      disabled
                    >
                      Swahili
                    </ToggleButton>
                  </Field>
                  <Stack direction="row" spacing={1}>
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={handleChipClick}
                    />
                    <Chip
                      label="Clickable"
                      variant="outlined"
                      onClick={handleChipClick}
                    />
                  </Stack>
                </div>
              </Grid>
            </Grid>
            <div className="mini-header">
              <i className="fa-solid fa-earth-africa"></i>
              <span>Main Skills</span>
            </div>
            <div className="mini-header">
              <i className="fa-solid fa-earth-africa"></i>
              <span>Cooking Skills</span>
            </div>
            <div className="mini-header">
              <i className="fa-solid fa-earth-africa"></i>
              <span>Other Skills</span>
            </div>
            <div className="mini-header">
              <i className="fa-solid fa-earth-africa"></i>
              <span>Personality</span>
            </div>
          </FormStep> */}
          <FormStep
            stepName="Who are you!"
            onSubmit={() => console.log("Step4 submit")}
            validationSchema={yup.object({
              description: yup
                .string()
                .min(50, "Description too short...Atleast 50 characters")
                .max(120, "Too Long!")
                .matches(
                  /^[aA-zZ\s]+$/,
                  "Only alphabets are allowed for this field "
                )
                .required("A brief description is required!"),
            })}
          >
            <div className="desc-header">
              Describe Your Working Experience and your personality
            </div>
            <div className="desc">
              <Grid container spacing={3}>
                <Grid Item sm={6}>
                  <FormControls.Input
                    name="description"
                    placeholder="Please briefly explain: Who you are; How long you have worked; What is your personality!"
                    multiline
                    rows={6}
                  />
                </Grid>
              </Grid>
              {/* <Grid container spacing={3}>
                <Grid item sm={6}>
                  <FormControls.Input
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                  />
                </Grid>
              </Grid> */}
              {/* <TextareaAutosize
                maxRows={6}
                minRows={8}
                aria-label="maximum height"
                placeholder="Please briefly explain: Who you are; How long you have worked; What is your personality!"
                className="desc-content"
                name="description"

                
              /> */}
            </div>
            {/* <InputField name="street" label="Street" />
            <InputField name="country" label="Country" /> */}
          </FormStep>
        </MultiStepForm>
      </LocalizationProvider>
    </div>
  );
};

export default CandidateCompleteProfile;
