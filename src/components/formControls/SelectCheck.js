import React, { useState } from "react";
import { useField } from "formik";

import {
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  Select as MuiSelect,
  MenuItem,
} from "@material-ui/core";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const countries = ["Saudi Arabia", "Kuwait", "Dubai", "UAE"];

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const SelectCheck = ({ label, ...props }) => {
  const [countryName, setCountryName] = useState([]);
  const [field, meta] = useField(props);
  const { options } = props;

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCountryName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl fullWidth size="small" variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        label={label}
        {...field}
        // input={<OutlinedInput label="Tag" />}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
        {...props}
        // renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      >
        {options.map((item, index) => (
          <MenuItem key={index} value={item}>
            <Checkbox checked={countryName.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default SelectCheck;
