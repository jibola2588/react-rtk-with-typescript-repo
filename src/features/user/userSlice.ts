import {createSlice,createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'

export interface IUser{ 
  name:string,
id:number
}

interface IUserProps { 
  loading:boolean,
  users:IUser[] | null,
  error:string | undefined
}

const initialState :IUserProps = { 
    loading:false,
    users:[],
    error:''
}

// this generates Pending,fulfilled and rejected

export const fetchUsers = createAsyncThunk('user/fetchUsers',() => { 
  return axios
             .get('https://jsonplaceholder.typicode.com/users')
             .then(res => res.data)
})

const userSlice = createSlice({ 
    name:'user',
    initialState,
    reducers:{},
    extraReducers: builder => { 
       builder.addCase(fetchUsers.pending, state => { 
        state.loading = true;
        state.users = null;
        state.error = ''
       });
      builder.addCase(fetchUsers.fulfilled, (state,action:PayloadAction<IUser[]>) => { 
        state.loading = false;
        state.users = action.payload;
        state.error = ''
      })
      builder.addCase(fetchUsers.rejected, (state,action) => { 
        state.loading = false;
        state.users = null;
        state.error = action.error.message
      })
    }
})


export default userSlice.reducer;
