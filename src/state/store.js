import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice.js'
import productPreviewSlice from './productPreviewSlice.js'
import cartQuantitySlice from './cartQuantitySlice.js'
import cartProductsListSlice from './cartProductsList.js'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    productPreview: productPreviewSlice,
    cartQuantity: cartQuantitySlice,
    cartProductsList: cartProductsListSlice, 
  }
})

