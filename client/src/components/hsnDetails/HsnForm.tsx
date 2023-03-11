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
import { IHsnDetails } from "../../types/hsndetails";


const validationSchemaHsn = yup.object().shape({
  hsnNo: yup.string().trim().required("hsn No is required"),
  gst: yup.number().required("gst No is required")
});

const hsnPercentage: number[] = [0, 5, 12, 18, 28];
const HsnFormField = {
  hsnNo: "",
  gst: "",
};

const HsnForm = () => {
  const [hsnDetails, setHsnDetails] = useState<IHsnDetails[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (values: IHsnDetails, actions: any) => {
    setHsnDetails([
      ...hsnDetails,
      { id: values.hsnNo, hsnNo: values.hsnNo, gst: values.gst },
    ]);
    console.log(actions);
    actions.resetForm({ values: "" });
    dispatch(setNotification(true));
    dispatch(getHsnList());
  };

  return (
    <div>
      <Formik
        initialValues={HsnFormField}
        validationSchema={validationSchemaHsn}
        onSubmit={(values: IHsnDetails, actions: any) => {
          onSubmit(values, actions);
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
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
                fullWidth
                error={Boolean(errors.gst && touched.gst)}
              >
                <InputLabel htmlFor="gst">Gst</InputLabel>
                <Select
                  name="gst"
                  value={values.gst}
                  label="gst"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                >
                  {hsnPercentage.map((hsn:number) => {
                    return (
                      <MenuItem key={hsn} value={hsn}>
                        {hsn}
                      </MenuItem>
                    );
                  })}
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
