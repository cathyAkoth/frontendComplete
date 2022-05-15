import { useField } from "formik";
import styled from "styled-components";
import "./formControls.css";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
} from "@material-ui/core";

const StyledErrorMessage = styled.div`
  font-size: 0.75rem;
  color: #f44336;
  width: 400px;
  margin-top: 0.25rem;
  margin-left: 14px;
  text-align: left;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.66;
  letter-spacing: 0.03333em;
  // &:before {
  //   content: "❌ ";
  //   font-size: 10px;
  // }
  // @media (prefers-color-scheme: dark) {
  //   color: var(--red-300);
  // }
`;

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  // const { id = "", name = "", options } = props;
  const { options } = props;
  return (
    <FormControl fullWidth size="small" variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      >
        <MenuItem value="">None</MenuItem>
        {options.map((item, index) => (
          <MenuItem value={item} key={index}>
            {item}
          </MenuItem>
        ))}
      </MuiSelect>
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default Select;
