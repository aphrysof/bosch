import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILogin } from '../../types';
import { http } from '../axios/http';
// import createHost from 'cross-domain-storage/host'
const createHost = require('cross-domain-storage/host');

interface initState {
  error: any,
  loading: boolean,
  data: any
}

const initialState: initState = {
  error: "",
  loading: false,
  data: ""
}

const storageHost = createHost([
    {
        origin: 'http://localhost:3000',
        allowedMethods: ['get', 'set', 'remove'],
    },
    {
        origin: 'http://localhost:4000',
        allowedMethods: ['get'],
    },
]);

export const loginUser = createAsyncThunk("/users/login", async ({ navigate, ...rest }: ILogin, { rejectWithValue }) => {
  try {
    console.log(">>>rest", rest)
    const rs = await http.post(`https://api.imalipay.com/users/login`, rest)
    if (rs.data.statusCode === '0000') {
      localStorage.setItem('access_token', rs.data.data[0].access_token)
      localStorage.setItem('refresh_token', rs.data.data[0].refresh_token)
      navigate("/overview")
      return rs.data
    }

    if (rs.data.statusCode === "9000") {
      // console.log(">>>>>>response login 2", rs.data)
      return rs.data.statusMessage
    }
  } catch (e: any) {
    return rejectWithValue(e.message)
  }
})

const loginSlice = createSlice({
  name: "/users/login",
  initialState,
  reducers: {
    logout: (state) => {
        localStorage.clear();
        storageHost.close()
        state.loading = false;
        state.error = ""
        window.location.pathname = "/"
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;

    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // console.log("<>>>>>>action", action.payload)
      state.loading = false;
      state.error = "";
      state.data = action.payload
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },

})

export const { logout } = loginSlice.actions
export default loginSlice.reducer