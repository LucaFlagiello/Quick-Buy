import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    addWishListProduct: (state, action) => {
      const product = state.find((item) => item.model === action.payload.model);
      if (product) {
        const updateList = state.filter((item) => item.model !== action.payload.model);
        return [ ...updateList, { ...product, quantity: product.quantity + 1 }]
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    },

    removeWishProduct: (state, action) => {
      return state.filter((item) => item.model !== action.payload.model);
    },
  }
})

export const { addWishListProduct, removeWishProduct } = wishListSlice.actions;

export default wishListSlice.reducer;