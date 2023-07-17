import { cartSlice } from "../features/cartSlice/CartSlice.js";
import { productSlice } from "../features/productSlice/ProductSlice.js";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer : {
        
        cart: cartSlice.reducer,        // cart is name given to it and will be shown in redux devtool (chrome extension)

        products: productSlice.reducer  // this is async.. created using createAsuncThunck.. and fectch all products inside store directly
    }
})

export default store

// this store is imported in main.jsx