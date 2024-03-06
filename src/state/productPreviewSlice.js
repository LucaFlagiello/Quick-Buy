import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const productPreviewSlice = createSlice({
  name: 'productPreview',
  initialState, 
  reducers: {
    showPreview: ((state, action) => {
      return action.payload;
    })
  }
})

export const { showPreview } = productPreviewSlice.actions;

export default productPreviewSlice.reducer;