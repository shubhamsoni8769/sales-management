import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { initialState } from "./model";
import schema from "./OrderFormValidation";
import { useDispatch, useSelector } from "react-redux";
import inputTextField from "../../../common-component/FormField/TextField";
import inputNumberField from "../../../common-component/FormField/NumberField";
import inputDateField from "../../../common-component/FormField/DateField";
import { AppDispatch, RootState } from "../../../reduxtoolkit/store";
import { updateInvoice } from "../../../reduxtoolkit/reducers/vendor/invioceFormSlice";
import AutoComplateField from "../../../common-component/FormField/AutoComplete";
import { IinvioceForm, IinvoiceOrderRows } from "../../../types/Vendor";

const CreateOrder = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.invioceForm);
  return (
    <Formik
      initialValues={initialState}
      validationSchema={schema}
      onSubmit={(values: IinvioceForm) => {
        //TODO: call api here to submit form for vendor
        dispatch(updateInvoice(values));
      }}
    >
      {({ values, setFieldValue, touched, errors, handleChange, handleBlur }) => (
        <Form>
          <div>
            <code>VALUES</code> {JSON.stringify(values)}
          </div>
          <div>
            <code>Error</code> {JSON.stringify(errors)}
          </div>
          <div>
            <code>TOUCHED</code> {JSON.stringify(touched)}
          </div>
          <FormControl
            fullWidth
            error={Boolean(errors.vendorName && touched.vendorName)}
          >
            <InputLabel htmlFor="vendorName">Vendor Name</InputLabel>
            <Select
              name="vendorName"
              value={values.vendorName}
              label="vendorName"
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
            >
              {['vendor1', 'vendoer2',].map((name: string) => {
                return (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FieldArray name="itemList">
            {(arrayHelpers) => (
              <div>
                {values.itemList &&
                  values.itemList.length > 0 &&
                  values.itemList.map(
                    (item: IinvoiceOrderRows, index: number) => (
                      <div key={index}>
                        <Grid container spacing={2}>
                          <Grid item xs={1.33}>
                            <Field
                              name={`itemList.${index}.medicineName`}
                              component={AutoComplateField}
                              label="Medicine Name"
                              index={index}
                              id="medicineName"
                              setFieldValue={setFieldValue}
                            />
                          </Grid>
                          <Grid item xs={1.33}>
                            <Field
                              name={`itemList.${index}.hsnCode`}
                              component={inputTextField}
                              label="HSN Code"
                              index={index}
                              id="hsnCode"
                            />
                          </Grid>
                          <Grid item xs={1.33}>
                            <Field
                              name={`itemList.${index}.companyName`}
                              label="Company Name"
                              component={inputTextField}
                              index={index}
                              id="companyName"
                            />
                          </Grid>
                          <Grid item xs={1.33}>
                            <Field
                              name={`itemList.${index}.batchNumber`}
                              label="Batch Number"
                              component={inputNumberField}
                              index={index}
                              id="batchNumber"
                            />
                          </Grid>
                          <Grid item xs={1.33}>
                            <Field
                              name={`itemList.${index}.expiryDate`}
                              component={inputDateField}
                              clearable={true}
                              index={index}
                              label=""
                              format="mm/yyyy"
                            />
                          </Grid>
                          <Grid item xs={1.33}>
                            <Field
                              name={`itemList.${index}.availableQuantity`}
                              label="Reviced quantity"
                              type="number"
                              required
                              component={inputNumberField}
                              index={index}
                              id="availableQuantity"
                            />
                          </Grid>
                          <Grid item xs={1.33}>
                            <Field
                              name={`itemList.${index}.scheme`}
                              label="Scheme"
                              component={inputNumberField}
                              index={index}
                              id="scheme"
                            />
                          </Grid>
                          <Grid item xs={1.33}>
                            <Field
                              name={`itemList.${index}.purchaseRate`}
                              label="Purchase Rate"
                              component={inputNumberField}
                              index={index}
                              id="purchaseRate"
                            />
                          </Grid>
                          <Grid item xs={1.33}>
                            <Field
                              name={`itemList.${index}.salesRate`}
                              label="Sales Rate"
                              component={inputNumberField}
                              index={index}
                              id="salesRate"
                            />
                          </Grid>
                          <Grid item xs={1}>
                            <Button
                              type="button"
                              variant="contained"
                              onClick={() => arrayHelpers.remove(index)}
                            >
                              {" "}
                              -{" "}
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    )
                  )}
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => arrayHelpers.push(initialState)}
                >
                  {" "}
                  +{" "}
                </Button>
                <div>
                  <Button
                    type="submit"
                    variant="contained"
                    onClick={() => console.log("submit")}
                  >
                    {" "}
                    Submit{" "}
                  </Button>
                </div>
              </div>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
};

export default CreateOrder;
