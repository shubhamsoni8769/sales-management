import * as yup from 'yup';

const validationSchema = yup.object().shape({
  medicineName: yup
    .string().trim()
    .required('Medical name is required'),
  saltName: yup
    .string().trim()
    .required('Salt name is required'),
  companyName: yup
    .string()
    .required('Company name is requierd!'),
  packaginging: yup
    .string()
    .required('Packaging is requierd!'),
  hsnCode: yup
    .number()
    .required('HSN is required'),
  gst: yup
    .string()
    .required('GST is required')
});

export { validationSchema }

