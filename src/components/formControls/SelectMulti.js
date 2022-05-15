import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Field, ErrorMessage, FieldProps, useField } from "formik";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
} from "@material-ui/core";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { id = "", name = "", options } = props;
  return (
    <FormControl fullWidth size="small" variant="outlined">
      <InputLabel id="label">{label}</InputLabel>
      <MuiSelect
        labelId="label"
        multiple
        renderValue={(selected) => selected.join(", ")}
        {...field}
        {...props}
      >
        {options.map((opt) => (
          <MenuItem key={opt} value={opt}>
            <Checkbox checked={name.indexOf(opt) > -1} />
            <ListItemText primary={opt} />
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

const WrappedSelect = ({ className, name, options, ...props }) => (
  <>
    <Field
      as={CustomSelect}
      name={name}
      className={className}
      {...props}
      options={options}
    />
    <ErrorMessage name={name}>{(msg) => <p>{msg}</p>}</ErrorMessage>
  </>
);

export default WrappedSelect;
