import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IcompanyName, IcompanyNamestate } from "../../../types/company";
const initialState: IcompanyNamestate = {
  companyName: [],
};
const companyFormSlice = createSlice({
  name: "companyForm",
  initialState,
  reducers: {
    updateCompany: (state, { payload }) => {
      state.companyName = [...state.companyName, payload];
    },
    deleteCompany: (state, { payload }: PayloadAction<IcompanyName>) => {
      state.companyName = state.companyName.filter((company) => {
        return company.id !== payload.id;
      });
    },
  },
});
export const { updateCompany, deleteCompany } = companyFormSlice.actions;
export default companyFormSlice.reducer;
