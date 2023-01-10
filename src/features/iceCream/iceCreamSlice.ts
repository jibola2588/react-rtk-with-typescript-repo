import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";


const initialState = { 
    num_of_iceCream : 5
}

const iceCreamSlice = createSlice({
    name:'iceCream',
    initialState,
    reducers:{ 
        ordered:state => { 
            state.num_of_iceCream ++
        },
        restocked:(state,action) => { 
            state.num_of_iceCream += action.payload
        }
    },
    extraReducers:(builder) => { 
        builder.addCase(cakeOrdered, state => {
            state.num_of_iceCream++
        })
    }
})


export default iceCreamSlice.reducer;
export const {ordered,restocked} = iceCreamSlice.actions