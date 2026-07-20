import { createSlice } from "@reduxjs/toolkit";

const initialvalue = {count:0}
const counterSlice = createSlice({
    name:"counter",
    initialState:initialvalue,
    reducers:{
        increment:(state,val)=>{state.count=state.count+val.payload},
        decrement:(state)=>{state.count=state.count-1},
        reset:(state)=>{state.count=0}
    }
})

const counterReducer = counterSlice.reducer

export const  {increment, decrement, reset} = counterSlice.actions

export default counterReducer