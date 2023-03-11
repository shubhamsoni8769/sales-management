import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../../components/VendorDetails/OrderForm/model";

const invioceFormSlice = createSlice({
  name: "invioceForm",
  initialState: initialState,
  reducers: {
    updateInvoice: (state, action) => {
      state = action.payload;
    },
  },
});

export const { updateInvoice } = invioceFormSlice.actions;
export default invioceFormSlice.reducer;
