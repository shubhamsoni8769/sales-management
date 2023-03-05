export interface IinvoiceOrderFormField {
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

export const invoiceOrderFormField: IinvoiceOrderFormField = {
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