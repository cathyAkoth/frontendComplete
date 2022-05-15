import React, { useState } from "react";
import "./style.css";
import { Formik, Form, FormikConfig, FormikValues } from "formik";
import FormNavigation from "./FormNavigation";
import { makeStyles, Step, StepLabel, Stepper } from "@material-ui/core";

interface Props extends FormikConfig<FormikValues> {
  children: React.ReactNode;
}

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      // width: "80%",
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

const MultiStepForm = ({ children, initialValues, onSubmit }: Props) => {
  const classes = useStyle();
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children);

  const [snapshot, setSnapshot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values: FormikValues) => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };

  const previous = (values: FormikValues) => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }

    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <div className="multistep-form">
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {(formik) => (
          <Form className={classes.root}>
            <Stepper activeStep={stepNumber} alternativeLabel>
              {steps.map((currentStep) => {
                const label = currentStep.props.stepName;
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            {step}

            <FormNavigation
              isLastStep={isLastStep}
              hasPrevious={stepNumber > 0}
              onBackClick={() => previous(formik.values)}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;

export const FormStep = ({ stepName = "", children }: any) => children;
