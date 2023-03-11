import * as yup from "yup";
export const validationSchemaCompany =  yup.object({
        company :  yup.string().required('hsn No is required')
})