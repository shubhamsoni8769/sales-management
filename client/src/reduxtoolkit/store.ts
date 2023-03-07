import { configureStore } from "@reduxjs/toolkit";
import invioceFormSlice from "./reducers/vendor/invioceFormSlice";

 export const store =  configureStore({
    reducer : {
        invioceFormReducer : invioceFormSlice,
        
    }
 })

 export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch