import { Button, Grid } from "@mui/material";
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import AutoComplateField from "../../common-component/AutoComplete";
import inputDateField from "../../common-component/DateField";
import inputNumberField from "../../common-component/NumberField";
import inputTextField from "../../common-component/TextField";
import { IinvoiceOrderFormField, invoiceOrderFormField as item } from "./model";
import schema from "./OrderFormValidation";
import { useDispatch, useSelector } from "react-redux";
import { IinviocerFormInitialState } from "../../types/Vendor";
import { toast } from "react-toastify";
import { AppDispatch, RootState } from "../../reduxtoolkit/store";
import { UPDADTE_INVOICE } from "../../reduxtoolkit/reducers/vendor/invioceFormSlice";
const CreateOrder = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.invioceFormReducer);
  console.log(state, "state");
  return (
    <Formik
      initialValues={state}
      validationSchema={schema}
      onSubmit={(values: IinviocerFormInitialState) => {
        //TODO: call api here to submit form for vendor
        toast.success("won");
        dispatch(UPDADTE_INVOICE(values));
      }}
    >
      {({ values, setFieldValue, touched }) => (
        <Form>
          <FieldArray name="itemList">
            {(arrayHelpers) => (
              <div>
                <div>
                  <code>VALUES</code> {JSON.stringify(arrayHelpers.form.values)}
                </div>
                <div>
                  <code>Error</code> {JSON.stringify(arrayHelpers.form.errors)}
                </div>
                <div>
                  <code>TOUCHED</code> {JSON.stringify(touched)}
                </div>
                {values.itemList &&
                  values.itemList.length > 0 &&
                  values.itemList.map(
                    (item: IinvoiceOrderFormField, index: number) => (
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
                              format="dd/MM/yyyy"
                            />
                          </Grid>
                          <Grid item xs={1.33}>
                            <Field
                              name={`itemList.${index}.availableQuantity`}
                              label="Available Quantity"
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
                  onClick={() => arrayHelpers.push(item)}
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
