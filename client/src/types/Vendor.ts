import { invioceFormActionsType } from "../redux/Vendor/Action";
import { IinvoiceOrderFormField } from "../VendorDetails/OrderForm/model";

export type IinviocerFormInitialState = {
    itemList: IinvoiceOrderFormField[];
};

export type IinvoiceFormAction = {
    type: invioceFormActionsType;
    itemList: IinvoiceOrderFormField[];
};

