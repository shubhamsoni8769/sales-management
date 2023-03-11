import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IcompanyName, IcompanyNamestate } from "../../../types/company";
const initialState: IcompanyNamestate = {
  companyName: [],
};
const companyFormSlice = createSlice({
  name: "companyForm",
  initialState,
  reducers: {
    UPDATE_COMPANY: (state, { payload }) => {
      state.companyName = [...state.companyName, payload];
    },
    DELETE_COMPANY: (state, { payload }: PayloadAction<IcompanyName>) => {
      state.companyName = state.companyName.filter((company) => {
        return company.id !== payload.id;
      });
    },
  },
});
export const { UPDATE_COMPANY, DELETE_COMPANY } = companyFormSlice.actions;
export default companyFormSlice.reducer;
