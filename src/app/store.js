import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from '../features/pizza/pizzaSlice'
import burgerReduccer from "../features/burger/burgerSlice";
import  productReducer from '../features/products/productSlice'
export const store = configureStore({
    reducer:{
        pizza: pizzaReducer,
        burger: burgerReduccer,
        product: productReducer

    }
})