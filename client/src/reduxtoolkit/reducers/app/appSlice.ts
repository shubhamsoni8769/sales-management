import {createSlice,PayloadAction} from '@reduxjs/toolkit'

type AppProps={
    notificationState:boolean
}

const initialState:AppProps={
    notificationState:false
}

const appSlice=createSlice({
    name:"App",
    initialState,
    reducers:{
        setNotification(state:AppProps,action:PayloadAction<boolean>){
            state.notificationState=action.payload
        }
    }

})

export default appSlice.reducer;
export const {setNotification}=appSlice.actions