import { TextField } from "@material-ui/core";
import { FieldConfig, useField } from "formik";

interface Props extends FieldConfig {
  label: String;
}

const Input = ({ label, ...props }: Props) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default Input;
