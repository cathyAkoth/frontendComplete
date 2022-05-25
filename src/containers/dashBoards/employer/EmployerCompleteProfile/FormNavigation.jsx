import { Button } from "@material-ui/core";

// interface Props {
//   hasPrevious?: Boolean;
//   onBackClick: (values: FormikValues) => void;
// }

const FormNavigation = (props) => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: 50,
        marginBottom: 50,
        justifyContent: "space-between",
      }}
    >
      {props.hasPrevious && (
        <Button variant="contained" type="button" onClick={props.onBackClick}>
          Back
        </Button>
      )}
      <Button type="submit" color="primary" variant="contained">
        {props.isLastStep ? "Submit" : "Next"}
      </Button>
    </div>
  );
};

export default FormNavigation;
