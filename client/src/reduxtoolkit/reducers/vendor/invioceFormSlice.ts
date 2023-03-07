import { createSlice } from "@reduxjs/toolkit";
import { invoiceOrderFormField } from "../../../VendorDetails/OrderForm/model";

const invioceFormSlice = createSlice({
  name: "invioceForm",
  initialState: {
    itemList: [invoiceOrderFormField],
  },
  reducers: {
    UPDADTE_INVOICE: (state, action) => {
      state = action.payload;
    },
  },
});

export const { UPDADTE_INVOICE } = invioceFormSlice.actions;
export default invioceFormSlice.reducer;
