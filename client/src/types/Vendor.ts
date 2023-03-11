export interface IinvoiceOrderRows {
    medicineName: string
    hsnCode: string
    companyName: string,
    batchNumber: number | string,
    expiryDate: string,
    availableQuantity: number | string,
    scheme: number | string,
    purchaseRate: number | string,
    salesRate: number | string,
}

export type IinvioceForm = {
    vendorName: string,
    itemList: IinvoiceOrderRows[]
}