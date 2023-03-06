import React from "react";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { Provider, useDispatch, useSelector } from "react-redux";
import modalReducer, { toggleShowText } from "./modals";
import  loginReducer, { login }  from "./users";

interface ILogin {
  username: string
  password: string
  router?: any
}

interface initState {
  error: any,
  loading: boolean,
  data: any
}

//This is store

const store = configureStore({
  reducer: {
    modals: modalReducer,
    login: loginReducer,
  },
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: (data?: any) => AppDispatch = useDispatch; 

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;



  // loginUser(state: initState | undefined, action: AnyAction): initState



  export function useStore() {

    const {showText} = useSelector((state: RootState) => state.modals)
    const {error, loading, data }= useSelector((state:RootState) => state.login)
    const dispatch = useDispatch()
    return {
      showText,
      error,
      loading,
      data,
      login: ({redirect, ...data}:any) =>  dispatch(login({redirect, ...data})),
      popModal: () =>dispatch(toggleShowText())
    }
  } 




  


export function StoreProvider({ children }) {
 return  <Provider store={store}>{children}</Provider>;
}
