import { number } from "yup"

interface IformValues {
    medicineName: string
    hsnCode: string
    companyName: string,
    batchNumber: number | string,
    expiryDate: string,
    availableQuantity: number |string,
    scheme: number | string,
    purchaseRate: number | string,
    salesRate: number | string,
}

export const initialFormValues:IformValues = {
    medicineName: "",
    hsnCode: "",
    companyName: "",
    batchNumber: "",
    expiryDate: '',
    availableQuantity: "",
    scheme: "",
    purchaseRate: "",
    salesRate: ""
}