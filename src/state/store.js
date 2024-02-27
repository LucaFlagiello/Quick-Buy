import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice.js'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  }
})

