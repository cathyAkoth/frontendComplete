import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import { useField } from "formik";

const RadioGroup = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { name, items } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup
        row
        name={name}
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      >
        {items.map((item, index) => (
          <FormControlLabel key={index} control={<Radio />} label={item} />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
