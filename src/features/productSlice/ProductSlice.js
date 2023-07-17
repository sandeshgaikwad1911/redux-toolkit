import { createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import axios from "axios";


   // This is an async call... ............
 export const fetchProducts = createAsyncThunk('products/fetch', async()=>{
        const products = await axios.get('https://fakestoreapi.com/products')
        return products.data
 });

export const STATUS = Object.freeze({
    IDLE : "idle",
    LOADING : 'loading',
    ERROR : "error"
});
//  here we freeze the object... so later it can not be modified.


const initialState = {
    data: [],
    status: STATUS.IDLE
};

export const productSlice= createSlice({
    name: "product",
    initialState: initialState,
    reducers: {},

    // for Thunk we have ... extraReducers : .. it can be object or function.. here we used function
    extraReducers: (builder)=>{
        builder
        .addCase(fetchProducts.pending, (state)=>{
            state.status = STATUS.LOADING;                  // make out status : loading..
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.status = STATUS.IDLE;                    
        })
        .addCase(fetchProducts.rejected, (state)=>{
            state.status = STATUS.ERROR
        })
    }
});

export default productSlice.reducer;