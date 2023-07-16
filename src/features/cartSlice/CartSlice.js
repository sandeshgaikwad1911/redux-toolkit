import { createSlice,} from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {

        add: (state, action)=>{

            // state is nothing but... const initialState = []

            /*   return [...state, action.payload] 
                 redux principle is .. we should not mutate our state directly  
                 here we return new state (new array) and assigned to initialState. 
                 
                 but redux-toolkit we have immer library.. now we can mutate our state directly.. so.
            */

                state.push(action.payload)

        },
        
        remove: (state, action)=>{
            return state.filter((item)=> item.id !== action.payload)
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;

//  this cartSlice reducer is imported in store.js



//  initialState can be objecet or array as well.

/* 
    reducers are the pure functions.. with the help of reducers we mutate our state

    pure function dosen't change state outside function.
    it changes state inside function only. depends on what argument passed to it and then
    return new state
 */ 