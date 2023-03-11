import { IinvioceForm } from "../../../types/Vendor";

export const initialState: IinvioceForm = {
    vendorName: "",
    itemList: [
        {
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
    ]
}