import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const cartQuantitySlice = createSlice({
  name:'cartQuanity',
  initialState,
  reducers: {
    incrementCartQuantity: ((state) => {
      return state += 1 ;
    }),

    incrementCartQuantityByAmount: ((state, action) => {
      return state += action.payload ;
    }),

    decrement: ((state, action) => {
      return state -= action.payload.quantity;
    })
  },
});

export const { incrementCartQuantity, decrement, incrementCartQuantityByAmount } = cartQuantitySlice.actions;

export default cartQuantitySlice.reducer;