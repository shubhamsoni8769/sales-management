import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { validationSchema } from "./formValidation";
import "./Form.css"

const ProductDetailForm = () => {


  const companies = ['apllo', 'xyz', 'abc'];
  const packages = ['1*1', '1*2', '1*3'];
  const hsnCodes = [3001, 3002, 3003];
  const gst = ['5%', '10%', '15%', '20%'];

  const formik = useFormik({
    initialValues: {
      medicineName: '',
      saltName: 'foobar',
      companyName: '',
      packaginging: '',
      hsnCode: '',
      gst: ''
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="medicineName"
              name="medicineName"
              label="Medicine Name"
              value={formik.values.medicineName}
              onChange={formik.handleChange}
              error={formik.touched.medicineName && Boolean(formik.errors.medicineName)}
              helperText={formik.touched.medicineName && formik.errors.medicineName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="saltName"
              name="saltName"
              label="Salt Name"
              type="text"
              value={formik.values.saltName}
              onChange={formik.handleChange}
              error={formik.touched.saltName && Boolean(formik.errors.saltName)}
              helperText={formik.touched.saltName && formik.errors.saltName}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth error={Boolean(formik.errors.companyName && formik.touched.companyName)}>
              <InputLabel htmlFor="companyName">Company Name</InputLabel>
              <Select
                name="companyName"
                value={formik.values.companyName}
                label="companyName"
                onChange={formik.handleChange}
                fullWidth
              >
                {
                  companies.map(company => {
                    return <MenuItem key={company} value={company}>{company}</MenuItem>
                  })
                }
              </Select>
              {formik.touched.companyName &&
                formik.errors.companyName &&
                <FormHelperText
                  sx={{ color: "#bf3333", marginLeft: "12px !important" }}>
                  {formik.errors.companyName}
                </FormHelperText>}
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl
              fullWidth
              error={Boolean(formik.errors.packaginging && formik.touched.packaginging)}
            >
              <InputLabel htmlFor="packaginging">Packaging</InputLabel>
              <Select
                name="packaginging"
                value={formik.values.packaginging}
                label="packaginging"
                onChange={formik.handleChange}
                error={formik.touched.packaginging && Boolean(formik.errors.packaginging)}
              >
                {
                  packages.map(packagesQty => {
                    return <MenuItem key={packagesQty} value={packagesQty}>{packagesQty}</MenuItem>
                  })
                }
              </Select>
              {formik.touched.packaginging &&
                formik.errors.packaginging &&
                <FormHelperText
                  sx={{ color: "#bf3333", marginLeft: "12px !important" }}>
                  {formik.errors.packaginging}
                </FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl
              fullWidth
              error={formik.touched.hsnCode && Boolean(formik.errors.hsnCode)}
            >
              <InputLabel htmlFor="hsnCode">HSN Code</InputLabel>
              <Select
                name="hsnCode"
                value={formik.values.hsnCode}
                label="hsnCode"
                onChange={formik.handleChange}
              >
                {
                  hsnCodes.map(code => {
                    return <MenuItem key={code} value={code}>{code}</MenuItem>
                  })
                }
              </Select>
              {
                formik.touched.hsnCode &&
                formik.errors.hsnCode &&
                <FormHelperText
                  sx={{ color: "#bf3333", marginLeft: "12px !important" }}>
                  {formik.errors.hsnCode}
                </FormHelperText>}
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl
              fullWidth
              error={formik.touched.gst && Boolean(formik.errors.gst)}>
              <InputLabel htmlFor="gst">GST</InputLabel>
              <Select
                name="gst"
                value={formik.values.gst}
                label="gst"
                onChange={formik.handleChange}
              >
                {
                  gst.map(gstVal => {
                    return <MenuItem key={gstVal} value={gstVal}>{gstVal}</MenuItem>
                  })
                }
              </Select>
              {
                formik.touched.gst &&
                formik.errors.gst &&
                <FormHelperText>{formik.errors.gst}</FormHelperText>}
            </FormControl>
          </Grid>

          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
                
          {/* <div>
          <code>touched:</code> {JSON.stringify(formik.touched, null, 2)}
        </div>
        <div>
          <code>errors:</code> {JSON.stringify(formik.errors, null, 2)}
        </div>
        <div>
          <code>values:</code> {JSON.stringify(formik.values, null, 2)}
        </div>
        <div>
          <code>isSubmitting:</code> {JSON.stringify(formik.isSubmitting, null, 2)}
        </div> */}
        </Grid>
      </form >
    </div>
  )
}
export default ProductDetailForm;