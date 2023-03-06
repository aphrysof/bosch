import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { http } from '../axios/http';
// import { deleteCookie, setCookie } from 'cookies-next';

interface initState {
  error: any,
  loading: boolean,
  data: any
}

 interface ILogin {
  username: string
  password: string
  redirect?: any
}

const initialState: initState = {
  error: "",
  loading: false,
  data: ""
}
  

export const loginUser = createAsyncThunk("/users/login", async ({ redirect, ...rest }: ILogin, { rejectWithValue }) => {
  try {
    // console.log(">>>rest", rest)
    const rs = await http.post(`https://api.sandbox.imalipay/users/login`, rest)
    if (rs.data.statusCode === '0000') {
    //   setCookie('accessToken', rs.data.data[0].access_token)
      localStorage.setItem('access_token', rs.data.data[0].access_token)
      localStorage.setItem('refresh_token', rs.data.data[0].refresh_token)
      redirect("/overview")
      return rs.data
    }

    if (rs.data.statusCode === "9000") {
      console.log(">>>>>>response login 2", rs.data)
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
        // deleteCookie('accessToken');
        state.loading = false;
        state.error = ""
        window.location.pathname = "/"
    },
    login: (state, action)  => {
      state.data = console.log(action.payload)
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

export const { logout, login } = loginSlice.actions
export default loginSlice.reducer