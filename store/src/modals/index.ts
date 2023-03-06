import { createSlice } from '@reduxjs/toolkit';

interface initState {
  showText: boolean,
 
}

const initialState: initState = {
  showText: false,
 
}

const modalSlice = createSlice({
  name: "/modals/setup",
  initialState,
  reducers: {
    toggleShowText(state: initState) {
      state.showText = !state.showText
    }
    //    toggleCreditRequestDeclined(state: initState) {
    //   state.creditRequestDeclined= !state.creditRequestDeclined
    // },

  }
})

export const {toggleShowText} = modalSlice.actions
export default modalSlice.reducer