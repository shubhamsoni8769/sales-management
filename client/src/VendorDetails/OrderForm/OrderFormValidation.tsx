import * as yup from "yup";

const schema = yup.object().shape({
    itemList: yup.array().of(
      yup.object().shape({
        medicineName: yup.string().required("Required"),
        hsnCode: yup.string().required("Required"),
        companyName: yup.string().required("Required"),
        batchNumber: yup.number().required("Required"),
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

  export default schema;