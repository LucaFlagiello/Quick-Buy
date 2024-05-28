import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem('theme') || 'primary-color'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('theme', action.payload);
    }
  }
})

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
