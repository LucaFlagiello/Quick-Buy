import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartProductsListSlice = createSlice({
  name: 'cartProductsList',
  initialState, 
  reducers: {
    addProduct: (state, action) => {
      const product = state.find((item) => item.model === action.payload.model);
      if (product) {
        const updateList = state.filter((item) => item.model !== action.payload.model);
        return [ ...updateList, { ...product, quantity: product.quantity + 1 }]
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }
    },

    removeProduct: (state, action) => {
      return state.filter((item) => item.model !== action.payload.model);
    },
  }
})

export const { addProduct, removeProduct } = cartProductsListSlice.actions;

export default cartProductsListSlice.reducer;
