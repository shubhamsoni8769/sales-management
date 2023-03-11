import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

/* need to replace data type once we get to know the format about data returned
 from api */

type HsnProps = {
  loading: boolean;
  data: any;
  error: string;
};

const initialState: HsnProps = {
  loading: false,
  data: [],
  error: "",
};

export const getHsnList = createAsyncThunk("user/getHsnList", async () => {
  // need replace with actual Api
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  return response;
});

const hsnSlice = createSlice({
  name: "HsnList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHsnList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHsnList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    });
    builder.addCase(getHsnList.rejected, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = `${action.payload}`;
    });
  },
});

export default hsnSlice.reducer;
