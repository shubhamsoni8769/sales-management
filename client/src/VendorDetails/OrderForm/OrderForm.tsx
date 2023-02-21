import { Autocomplete, Button, TextField } from "@mui/material";
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
                      <Field
                        name={`itemList.${index}.medicineName`}
                        component={AutoComplateField}
                        label="Medicine Name"
                        index={index}
                        id="medicineName"
                        setFieldValue= {setFieldValue}
                      />
                      <Field
                        name={`itemList.${index}.hsnCode`}
                        component={inputTextField}
                        label="HSN Code"
                        index={index}
                        id="hsnCode"
                      />
                      <Field
                        name={`itemList.${index}.companyName`}
                        label="Company Name"
                        component={inputTextField}
                        index={index}
                        id="companyName"
                      />
                      <Field
                        name={`itemList.${index}.batchNumber`}
                        label="Batch Number"
                        component={inputNumberField}
                        index={index}
                        id="batchNumber"
                      />
                      <Field
                        name={`itemList.${index}.expiryDate`}
                        component={inputDateField}
                        clearable={true}
                        index={index}
                        label=""
                        format="dd/MM/yyyy"
                      />
                      <Field
                        name={`itemList.${index}.availableQuantity`}
                        label="Available Quantity"
                        type="number"
                        required
                        component={inputNumberField}
                        index={index}
                        id="availableQuantity"
                      />
                      <Field
                        name={`itemList.${index}.scheme`}
                        label="Scheme"
                        component={inputNumberField}
                        index={index}
                        id="scheme"
                      />
                      <Field
                        name={`itemList.${index}.purchaseRate`}
                        label="Purchase Rate"
                        component={inputNumberField}
                        index={index}
                        id="purchaseRate"
                      />
                      <Field
                        name={`itemList.${index}.salesRate`}
                        label="Sales Rate"
                        component={inputNumberField}
                        index={index}
                        id="salesRate"
                      />
                      <Button
                        type="button"
                        variant="contained"
                        onClick={() => arrayHelpers.remove(index)}
                      > - </Button>

                    </div>
                  ))}
                <Button type="button" variant="contained" onClick={() => arrayHelpers.push(item)}> + </Button>
                <div>
                  <Button type="submit"> Submit </Button>
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
