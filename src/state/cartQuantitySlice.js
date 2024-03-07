import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const cartQuantitySlice = createSlice({
  name:'cartQuanity',
  initialState,
  reducers: {
    increment: ((state) => {
      return state += 1 ;
    }),

    incrementByAmount: ((state, actions) => {
      return state += actions.payload ;
    }),

    decrement: ((state) => {
      return state -= 1;
    })
  }
});

export const { increment, decrement, incrementByAmount } = cartQuantitySlice.actions;

export default cartQuantitySlice.reducer;