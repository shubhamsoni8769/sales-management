import { Autocomplete, TextField } from "@mui/material";
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const inputTextField = (props: any) => {
  console.log(props);
  const {
    form: { errors, touched },
    index,
    id
  } = props;
  console.log(errors, touched);
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
      // value={props.field.name}
      onChange={props.field.onChange}
      error={err && touch}
      // helperText={formik.touched.saltName && formik.errors.saltName}
    />
  );
};

const inputNumberField = (props: any) => {
  console.log(props);
  const {
    form: { errors, touched },
    index,
    id
  } = props;
  console.log(errors, touched);
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
      type="number"
      // value={props.field.name}
      onChange={props.field.onChange}
      error={err && touch}
      // helperText={formik.touched.saltName && formik.errors.saltName}
    />
  );
};

const inputDateField = (props: any) => {
  console.log(props);
  const {
    form: { errors, touched },
    index,
    id
  } = props;
  console.log(errors, touched);
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
      type="date"
      // value={props.field.name}
      onChange={props.field.onChange}
      error={err && touch}
      // helperText={formik.touched.saltName && formik.errors.saltName}
    />
  );
};
const CreateOrder = () => {
  const schema = yup.object().shape({
    itemList: yup.array().of(
      yup.object().shape({
        medicinName: yup.string().required("Required"),
        hsnCode: yup.string().required("Required"),
        companyName: yup.string().required("Required"),
        batchNumber: yup.string().required("Required"),
        expiryDate: yup.date().required("Required"),
        availableQuantity: yup.number().required("Required").test(
          'Is positive?', 
          'ERROR: The quantity value cannot be less than 0!', 
          (value) => value >= 0
        ),
        scheme: yup.number().required("Required").test(
          'Is positive?', 
          'ERROR: The scheme value must be greater than 0!', 
          (value) => value > 0
        ),
        purchaseRate: yup.number().required("Required").test(
          'Is positive?', 
          'ERROR: The rate value cannot be less than 0!', 
          (value) => value >= 0
        ),
        salesRate: yup.number().required("Required").test(
          'Is positive?', 
          'ERROR: The rate value cannot be less than 0!', 
          (value) => value >= 0
        ),

      })
    )
  });

  const item = {
    medicineName: "",
    hsnCode: "",
    companyName: "",
    batchNumber: 0,
    expiryDate:'',
    availableQuantity: 0,
    scheme: 0,
    purchaseRate: 0,
    salesRate: 0
  };

  return (
    <Formik
      initialValues={{
        itemList: [item]
      }}
      validationSchema={schema}
      onSubmit={(values: any) => {}}
    >
      {({ values, setFieldValue, touched }) => (
        <Form>
          <FieldArray name="itemList">
            {(arrayHelpers) => (
              <div>
                <div>
                  <code>VALUES</code>{" "}
                  {JSON.stringify(arrayHelpers.form.values, [2])}
                </div>
                <div>
                  <code>Error</code>{" "}
                  {JSON.stringify(arrayHelpers.form.errors, [2])}
                </div>
                <div>
                  <code>TOUCHED</code> {JSON.stringify(touched, [2])}
                </div>
                {values.itemList &&
                  values.itemList.length > 0 &&
                  values.itemList.map((item, index) => (
                    <div key={index}>
                      <Autocomplete
                        id={`itemList.${index}.medicinName`}
                        options={["a", "b", "c"]}
                        style={{ width: 300 }}
                        onChange={(e, value) => {
                          setFieldValue(
                            `itemList.${index}.medicineName`,
                            value !== null ? value : "HI"
                          );
                        }}
                        renderInput={(params) => (
                          <TextField
                            margin="normal"
                            label="Medicine Name"
                            name={`itemList.${index}.medicineName`}
                            {...params}
                          />
                        )}
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
                        component={inputTextField}
                        index={index}
                        id="batchNumber"
                      />
                    <Field
                        name={`itemList.${index}.expiryDate`}
                        component={inputDateField}
                        required
                        clearable={true}
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

                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        -
                      </button>
                    </div>
                  ))}
                <button
                  type="button"
                  onClick={() => arrayHelpers.push(item)} // insert an empty string at a position
                >
                  +
                </button>
                <div>
                  <button type="submit">Submit</button>
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
