import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import "./Form.css";
import { medicineInitialState, validationSchema } from "./model";

const ProductDetailForm = () => {
  const companies = ["apllo", "xyz", "abc"];
  const hsnCodes = [3001, 3002, 3003];
  const gst = ["5%", "10%", "15%", "20%"];



  return (
    <Formik
      initialValues={medicineInitialState}
      validationSchema={validationSchema}
      onSubmit={(values: any) => {
        console.log(values);
      }}
    >
      {({ values, touched, errors, handleChange, handleBlur }) => (
        <Form>
          <h1>Add Medicine</h1>
          <div>
            <code>touched:</code> {JSON.stringify(touched, null, 2)}
          </div>
          <div>
            <code>errors:</code> {JSON.stringify(errors, null, 2)}
          </div>
          <div>
            <code>values:</code> {JSON.stringify(values, null, 2)}
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="medicineName"
                name="medicineName"
                label="Medicine Name"
                value={values.medicineName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.medicineName && Boolean(errors.medicineName)}
                helperText={touched.medicineName && errors.medicineName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="saltName"
                name="saltName"
                label="Salt Name"
                type="text"
                value={values.saltName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.saltName && Boolean(errors.saltName)}
                helperText={touched.saltName && errors.saltName}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                error={Boolean(errors.companyName && touched.companyName)}
              >
                <InputLabel htmlFor="companyName">Company Name</InputLabel>
                <Select
                  name="companyName"
                  value={values.companyName}
                  label="companyName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                >
                  {companies.map((company) => {
                    return (
                      <MenuItem key={company} value={company}>
                        {company}
                      </MenuItem>
                    );
                  })}
                </Select>
                {touched.companyName && errors.companyName && (
                  <FormHelperText
                    sx={{ color: "#bf3333", marginLeft: "12px !important" }}
                  >
                    {errors.companyName}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl
                fullWidth
                error={touched.hsnCode && Boolean(errors.hsnCode)}
              >
                <InputLabel htmlFor="hsnCode">HSN Code</InputLabel>
                <Select
                  name="hsnCode"
                  value={values.hsnCode}
                  label="hsnCode"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {hsnCodes.map((code) => {
                    return (
                      <MenuItem key={code} value={code}>
                        {code}
                      </MenuItem>
                    );
                  })}
                </Select>
                {touched.hsnCode && errors.hsnCode && (
                  <FormHelperText
                    sx={{ color: "#bf3333", marginLeft: "12px !important" }}
                  >
                    {errors.hsnCode}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth error={touched.gst && Boolean(errors.gst)}>
                <InputLabel htmlFor="gst">GST</InputLabel>
                <Select
                  name="gst"
                  value={values.gst}
                  label="gst"
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {gst.map((gstVal) => {
                    return (
                      <MenuItem key={gstVal} value={gstVal}>
                        {gstVal}
                      </MenuItem>
                    );
                  })}
                </Select>
                {touched.gst && errors.gst && (
                  <FormHelperText>{errors.gst}</FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
export default ProductDetailForm;
