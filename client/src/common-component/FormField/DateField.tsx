import { TextField } from "@mui/material";
import * as React from 'react';

const inputDateField = (props: any) => {
  const {
    form: { errors, touched },
    index,
    id
  } = props;
  const [item, , name] = props.field.name.split(".");
  const err =
    errors && errors[item] && errors[item][index] && errors[item][index][name];
  const touch =
    touched &&
    touched[item] &&
    touched[item][index] &&
    touched[item][index][name];

  return (
    <TextField
      fullWidth
      id={id}
      name={props.field.name}
      margin="normal"
      label={props.label}
      type="date"
      onChange={props.field.onChange}
      error={err && touch}
    />
  );
};

export default inputDateField;