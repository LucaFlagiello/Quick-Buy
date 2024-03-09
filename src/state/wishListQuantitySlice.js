import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const wishListQuantitySlice = createSlice({
  name:'wishListQuanity',
  initialState,
  reducers: {
    incrementWishListQuantity: ((state) => {
      return state += 1 ;
    }),

    decrementWishListQuantity: ((state, action) => {
      return state -= 1;
    })
  }
});

export const { incrementWishListQuantity, decrementWishListQuantity } = wishListQuantitySlice.actions;

export default wishListQuantitySlice.reducer;