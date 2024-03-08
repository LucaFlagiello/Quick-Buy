import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const cartQuantitySlice = createSlice({
  name:'cartQuanity',
  initialState,
  reducers: {
    increment: ((state) => {
      return state += 1 ;
    }),

    incrementByAmount: ((state, action) => {
      return state += action.payload ;
    }),

    decrement: ((state, action) => {
      return state -= action.payload.quantity;
    })
  }
});

export const { increment, decrement, incrementByAmount } = cartQuantitySlice.actions;

export default cartQuantitySlice.reducer;