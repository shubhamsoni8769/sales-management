import React, { useState } from "react";
import { Form, Formik } from "formik";
import {
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as yup from "yup";
import HsnTable from "./HsnTable";

export interface HsnDetails {
    id?:string;
 hsnNo: string;
 gst:string[]
}

const validationSchemaHsn = yup.object().shape({
  hsnNo: yup.string().trim().required("hsn No is required"),
  gst: yup.array().required(" gst percentage is required"),
});

const hsnPercentage = ["0%", "5%", "10%", "20%"];
const HsnFormField = {
  hsnNo: "",
  gst: [],
};

const HsnForm = () => {
  const [hsnDetails, setHsnDetails] = useState<HsnDetails[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleSubmit = (
    values:HsnDetails,
    actions: any
  ) => {
    setHsnDetails([
      ...hsnDetails,
      { id: values.hsnNo, hsnNo: values.hsnNo, gst: values.gst },
    ]);
    actions.resetForm({ values: "" });
    setSelected([]);
  };

  const handleChangeSelection = (event: any, values:HsnDetails) => {
    const value = event.target.value;

    setSelected(value);
    values.gst = value;
  };

  return (
    <div>
      <Formik
        initialValues={HsnFormField}
        validationSchema={validationSchemaHsn}
        onSubmit={(values: HsnDetails, actions: any) => {
          handleSubmit(values, actions);
        }}
      >
        {({ values, touched, errors, handleChange, handleBlur }) => (
          <Form>
            <h1>HSN</h1>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  id="hsnNo"
                  name="hsnNo"
                  label="Hsn No."
                  value={values.hsnNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.hsnNo && Boolean(errors.hsnNo)}
                />
              </Grid>

              <Grid item xs={4}>
                <FormControl
                  error={touched.gst && Boolean(errors.gst)}
                  fullWidth
                >
                  <InputLabel
                    htmlFor="gst"
                    onBlur={handleBlur}
                    error={touched.gst && Boolean(errors.gst)}
                  >
                    GST
                  </InputLabel>
                  <Select
                    labelId="gst"
                    multiple
                    value={selected}
                    onChange={(e) => handleChangeSelection(e, values)}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {hsnPercentage.map((option) => (
                      <MenuItem key={option} value={option}>
                        <ListItemIcon>
                          <Checkbox checked={selected.indexOf(option) > -1} />
                        </ListItemIcon>
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                style={{ height: "56px", top: 30, left: 20 }}
              >
                Add
              </Button>
            </Grid>
          </Form>
        )}
      </Formik>
      <HsnTable rowData={hsnDetails} />
    </div>
  );
};

export default HsnForm;
