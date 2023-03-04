import { IinviocerFormInitialState } from "../../types/Vendor";
import { IinvoiceOrderFormField, invoiceOrderFormField } from "../../VendorDetails/OrderForm/model";

export const vendorFormInitialState: IinviocerFormInitialState = {
    itemList: [invoiceOrderFormField]
};

export enum invioceFormActionsType {
    UPDATE_INVIOCE_FORM = "UPDATE_FORM",
}

export const UpdateInvioceForm = (updateFormValues: IinvoiceOrderFormField) => {
    return {
        type: invioceFormActionsType.UPDATE_INVIOCE_FORM,
        updateFormValues
    } as const;
};

