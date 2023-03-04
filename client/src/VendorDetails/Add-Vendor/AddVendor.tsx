import React, {useState } from 'react'
import { Form, Formik, useFormik } from "formik"
import { Grid, TextField, Button, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material'
import { validationSchema } from './VendorFormValidation';
import { vendorFormField } from './model';

const stateList = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
];
const AddVendor = () => {

    return (
        <div>
            <Formik
                initialValues={vendorFormField}
                validationSchema={validationSchema}
                onSubmit={(values: any) => {
                    console.log(values)
                }}
            >
                {({ values, setFieldValue, touched, errors, handleChange, handleBlur }) => (
                    <Form>
                        <h1>AddVendor</h1>
                        <div>
                            <code>touched:</code> {JSON.stringify(touched, null, 2)}
                        </div>
                        <div>
                            <code>errors:</code> {JSON.stringify(errors, null, 2)}
                        </div>
                        <div>
                            <code>values:</code> {JSON.stringify(values, null, 2)}
                        </div>
                        <Grid container spacing={4}>
                            <Grid item xs={4}>
                                {/* <Label>Vender First Name </Label> */}
                                {/* <InputLabel id="demo-simple-select-label">Vender's Firm Name</InputLabel> */}
                                <TextField
                                    fullWidth
                                    id="firmName"
                                    name="firmName"
                                    label="Vender Firm Name"
                                    value={values.firmName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.firmName && Boolean(errors.firmName)}
                                />

                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    id="personName"
                                    name="personName"
                                    label="Vender Person Name"
                                    value={values.personName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.personName && Boolean(errors.personName)}

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}

                                />
                            </Grid>

                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    id="email"
                                    name="email"
                                    label="Email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.email && Boolean(errors.email)}

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <FormControl
                                    error={touched.state && Boolean(errors.state)}
                                    fullWidth
                                >
                                    <InputLabel htmlFor="state">State</InputLabel>
                                    <Select
                                        name="state"
                                        id="state"
                                        label="state"
                                        value={values.state}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    >
                                        {stateList.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}

                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={4}>
                                <FormControl
                                    error={touched.district && Boolean(errors.district)}
                                    fullWidth
                                >
                                    <InputLabel htmlFor="district">District</InputLabel>

                                    <Select
                                        name="district"
                                        labelId="district"
                                        id="district"
                                        value={stateList}
                                        label="Age"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        {stateList.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}

                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    id="city"
                                    name="city"
                                    label="City"
                                    value={values.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.city && Boolean(errors.city)}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    id="address"
                                    name="address"
                                    label="Address"
                                    value={values.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.address && Boolean(errors.address)}

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    id="pincode"
                                    name="pincode"
                                    label="Pincode"
                                    value={values.pincode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.pincode && Boolean(errors.pincode)}

                                />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField
                                    fullWidth
                                    id="gstin"
                                    name="gstin"
                                    label="GSTIN"
                                    value={values.gstin}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={touched.gstin && Boolean(errors.gstin)}

                                />
                            </Grid>
                            <Button color="primary" variant="contained" fullWidth type="submit">
                                Submit
                            </Button>
                        </Grid>
                    </Form>

                )}
            </Formik>
        </div >

    )
}

export default AddVendor


