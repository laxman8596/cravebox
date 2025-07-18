import { createSlice } from "@reduxjs/toolkit";
import { pizza_order } from "../pizza/pizzaSlice";

const initialState = {
    burgerBase:200
}

const burgerSlice = createSlice({
    name:'burger',
    initialState, 
    reducers:{
        burger_order:(state)=>{
            state.burgerBase++
        },   
    },
    extraReducers: (builder) => {
    builder.addCase(pizza_order, (state) => {
      state.burgerBase--;
    });
  },
    
})

export default burgerSlice.reducer
export const {burger_order} = burgerSlice.actions