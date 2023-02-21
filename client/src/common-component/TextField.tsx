import { TextField } from "@mui/material";
import * as React from 'react';

const inputTextField = (props: any) => {
    const {
      form: { errors, touched, values },
      index,
      id
    } = props;
    let [item, , name] = props.field.name.split(".");
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
        label={props.label}
        type="text"
        onChange={props.field.onChange}
        error={err && touch}
        value={values[item][index][name]}
      />
    );
  };

  export default inputTextField