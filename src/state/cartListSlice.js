import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartProductsListSlice = createSlice({
  name: 'cartProductsList',
  initialState, 
  reducers: {
    addProduct: (state, actions) => {
      state.push(actions.payload);
    },

    removeProduct: (state, action) => {
      return state.filter((item) => item.model !== action.payload.model);
    },
  }
})

export const { addProduct, removeProduct } = cartProductsListSlice.actions;

export default cartProductsListSlice.reducer;
