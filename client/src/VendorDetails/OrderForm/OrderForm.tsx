import { Button, Grid } from "@mui/material";
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import AutoComplateField from "../../common-component/AutoComplete";
import inputDateField from "../../common-component/DateField";
import inputNumberField from "../../common-component/NumberField";
import inputTextField from "../../common-component/TextField";
import { initialFormValues as item } from "./model";
import schema from "./OrderFormValidation";

const CreateOrder = () => {
  return (
    <Formik
      initialValues={{
        itemList: [item]
      }}
      validationSchema={schema}
      onSubmit={(values: any) => { }}
    >
      {({ values, setFieldValue, touched }) => (
        <Form>
          <FieldArray name="itemList">
            {(arrayHelpers) => (
              <div>
                <div>
                  <code>VALUES</code>{" "}
                  {JSON.stringify(arrayHelpers.form.values)}
                </div>
                <div>
                  <code>Error</code>{" "}
                  {JSON.stringify(arrayHelpers.form.errors)}
                </div>
                <div>
                  <code>TOUCHED</code> {JSON.stringify(touched)}
                </div>
                {values.itemList &&
                  values.itemList.length > 0 &&
                  values.itemList.map((item, index) => (
                    <div key={index}>
                      <Grid container spacing={2}>
                        <Grid item xs={8}>
                          <Field
                            name={`itemList.${index}.medicineName`}
                            component={AutoComplateField}
                            label="Medicine Name"
                            index={index}
                            id="medicineName"
                            setFieldValue={setFieldValue}
                          />
                        </Grid>
                      </Grid>
                      <Grid container spacing={2}>
                        <Grid item xs={1.5}>
                          <Field
                            name={`itemList.${index}.hsnCode`}
                            component={inputTextField}
                            label="HSN Code"
                            index={index}
                            id="hsnCode"
                          />
                        </Grid>
                        <Grid item xs={1.5}>
                          <Field
                            name={`itemList.${index}.companyName`}
                            label="Company Name"
                            component={inputTextField}
                            index={index}
                            id="companyName"
                          />
                        </Grid>
                        <Grid item xs={1.5}>
                          <Field
                            name={`itemList.${index}.batchNumber`}
                            label="Batch Number"
                            component={inputNumberField}
                            index={index}
                            id="batchNumber"
                          />
                        </Grid>
                        <Grid item xs={1.5}>
                          <Field
                            name={`itemList.${index}.expiryDate`}
                            component={inputDateField}
                            clearable={true}
                            index={index}
                            label=""
                            format="dd/MM/yyyy"
                          />
                        </Grid>
                        <Grid item xs={1.5}>
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
                        <Grid item xs={1.5}>
                          <Field
                            name={`itemList.${index}.scheme`}
                            label="Scheme"
                            component={inputNumberField}
                            index={index}
                            id="scheme"
                          />
                        </Grid>
                        <Grid item xs={1.5}>
                          <Field
                            name={`itemList.${index}.purchaseRate`}
                            label="Purchase Rate"
                            component={inputNumberField}
                            index={index}
                            id="purchaseRate"
                          />
                        </Grid>
                        <Grid item xs={1.5}>
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
                          > - </Button>
                        </Grid>
                      </Grid>
                    </div>
                  ))}
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => arrayHelpers.push(item)}
                > + </Button>
                <div>
                  <Button type="submit" variant="contained"
                    onClick={() => console.log('submit')}> Submit </Button>
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
