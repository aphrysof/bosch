import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import  loginUser  from "./users/login";

export const store = configureStore({
    reducer: {
        login: loginUser,
    }
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: (data?: any) => AppDispatch = useDispatch; 

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;