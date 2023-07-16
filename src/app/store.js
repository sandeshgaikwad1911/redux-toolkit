import { cartSlice } from "../features/cartSlice/CartSlice.js";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        cart: cartSlice.reducer,        // cart is name given to it and will be shown in redux devtool (chrome extension)
    }
})

export default store

// this store is imported in main.jsx