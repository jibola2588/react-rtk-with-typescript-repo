import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface ICakeProp{ 
num_of_cakes:number
}

const initialState:ICakeProp = { 
    num_of_cakes : 10
}

const cakeSlice = createSlice({
    name:'cake',
    initialState,
    reducers:{ 
        ordered:state => { 
            state.num_of_cakes ++
        },
        restocked:(state,action:PayloadAction<number>) => { 
            state.num_of_cakes += action.payload
        }
    }
})



export default cakeSlice.reducer;
export const {ordered,restocked} = cakeSlice.actions