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
import { useDispatch } from "react-redux";
import { setNotification } from "../../reduxtoolkit/reducers/app/appSlice";
import { getHsnList } from "../../reduxtoolkit/reducers/hsn/hsnSlice";
import { AppDispatch } from "../../reduxtoolkit/store";

export type HsnDetails = {
  id?: string;
  hsnNo: string;
  gst: string[];
};

const validationSchemaHsn = yup.object().shape({
  hsnNo: yup.string().trim().required("hsn No is required"),
  gst: yup.array().of(yup.string()).min(1),
});

const hsnPercentage = ["0%", "5%", "12%", "18%", "20%"];
const HsnFormField = {
  hsnNo: "",
  gst: [],
};

const HsnForm = () => {
  const [hsnDetails, setHsnDetails] = useState<HsnDetails[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: HsnDetails, actions: any) => {
    setHsnDetails([
      ...hsnDetails,
      { id: values.hsnNo, hsnNo: values.hsnNo, gst: values.gst },
    ]);
    console.log(actions);
    actions.resetForm({ values: "" });
    setSelected([]);
    dispatch(setNotification(true));
    dispatch(getHsnList());
  };

  const handleChangeSelection = (event: any, setFieldValue: any) => {
    const value = event.target.value;
    setFieldValue("gst", value);
    setSelected(value);
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
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
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
                    onChange={(e) => handleChangeSelection(e, setFieldValue)}
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
                // onClick={()=>dispatch(setNotification(true))}
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
