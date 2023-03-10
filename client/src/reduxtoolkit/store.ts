import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducers/app/appSlice";
import invioceFormSlice from "./reducers/vendor/invioceFormSlice";

 export const store =  configureStore({
    reducer : {
        invioceForm : invioceFormSlice,
        app:appSlice,
        
    }
 })

 export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch