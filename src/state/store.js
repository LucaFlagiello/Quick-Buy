import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeSlice.js';
import productPreviewSlice from './productPreviewSlice.js';
import cartQuantitySlice from './cartQuantitySlice.js';
import cartProductsListSlice from './cartListSlice.js';
import wishListSlice from './wishListSlice.js';
import wishListQuantitySlice from './wishListQuantitySlice.js';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    productPreview: productPreviewSlice,
    cartProductsList: cartProductsListSlice, 
    cartQuantity: cartQuantitySlice,
    wishListQuantity: wishListQuantitySlice,
    wishList: wishListSlice, 
  }
});

