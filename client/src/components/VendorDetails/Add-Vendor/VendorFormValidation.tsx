import * as yup from 'yup'

const validationSchema = yup.object().shape({
    firmName: yup.string().trim().required('Firm name is required'),
    personName:yup.string().trim().required('Person name is required'),
    phoneNumber:yup.number().required('Phone number is required'),
    email:yup.string().required("String is required"),
    state: yup.string().required('Please choose state name'),
    district:yup.string().required("Please Chosse district name"),
    city:yup.string().required("Please choose city name"),
    address:yup.string().required("Please provide the address"),
    pincode:yup.number().required("Please provide the pincode"),
    gstin:yup.string().required("Please provide GSTIN Number"),
    dlNumber: yup.string().required("Please provide Dl number")
})

export { validationSchema }