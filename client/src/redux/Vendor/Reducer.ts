import { IinviocerFormInitialState, IinvoiceFormAction } from "../../types/Vendor";
import { invioceFormActionsType, vendorFormInitialState } from "./Action";

export function invioceFormReducer(
    state = vendorFormInitialState,
    action: IinvoiceFormAction
): IinviocerFormInitialState {
    switch (action.type) {
        case invioceFormActionsType.UPDATE_INVIOCE_FORM:
            return {
                ...state,
                itemList: action.itemList
            };
        default:
            return state;
    }
}