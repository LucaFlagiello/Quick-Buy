import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartProductsListSlice = createSlice({
  name: 'cartProductsList',
  initialState, 
  reducers: {
    addCartProduct: (state, action) => {
        const index = state.findIndex((item) => item.model === action.payload.model);
      if (index !== -1) {
        state[index].quantity += 1;
      } else {
        state = [...state, { ...action.payload, quantity: 1 }];
      };
      return state;
    },

    decrementCartProduct: (state, action) => {
      const index = state.findIndex((item) => item.model === action.payload.model);
      if (state[index].quantity === 1) {
        state.splice(index, 1);
      } else if(index !== -1) {
        state[index].quantity -= 1;
      }
    },

    removeCartProduct: ((state, action) => {
      const index = state.findIndex((item) => item.model === action.payload.model);
      state.splice(index, 1);
    })
  },
});

export const { addCartProduct, decrementCartProduct, removeCartProduct } = cartProductsListSlice.actions;

export default cartProductsListSlice.reducer;