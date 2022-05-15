import React from "react";
import { FieldConfig, useField } from "formik";
import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";

interface Props extends FieldConfig {
  label: String;
}

const Checkbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  const { name } = props;

  const convertToDefEventPara = (name) => ({
    target: {
      name,
    },
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            // checked={value}
            {...field}
            {...props}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}
            // onChange={(e) =>
            //   onChange(convertToDefEventPara(name, e.target.checked))
            // }
          />
        }
        label={label}
      />
    </FormControl>
  );
};

export default Checkbox;
