import { Autocomplete, TextField } from "@mui/material";
import * as React from 'react';

const AutoComplateField = (props: any) => {
    const {
        form: { errors, touched },
        index,
        id,
        setFieldValue
    } = props;
    const [item, , name] = props.field.name.split(".");
    const err = errors && errors[item] && errors[item][index] && errors[item][index][name];
    const touch =
        touched &&
        touched[item] &&
        touched[item][index] &&
        touched[item][index][name];
        console.log(err, touch , err&& touch)
    return (
        <Autocomplete
            id={id}
            options={["a", "b", "c"]}
            style={{ width: 100 }}
            onChange={(e, value) => {
                setFieldValue(
                    props.field.name,
                    value !== null ? value : ""
                );
            }}
            renderInput={(params) => (
                <TextField
                    error={err && touch}
                    margin="normal"
                    name={props.field.name}
                    label={props.label}
                    {...params}
                />
            )}
        />
    )
}

export default AutoComplateField;