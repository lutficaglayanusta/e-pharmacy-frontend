import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  deleteByOneProduct,
  deleteProductCart,
  fetchCart,
} from "./operation";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const existingItemIndex = state.items.findIndex(
          (item) => item._id === action.payload._id,
        );

        if (existingItemIndex > -1) {
          // Aynı konumda yerine koy
          state.items[existingItemIndex] = action.payload;
        } else {
          // Yeni ürün ise ekle
          state.items.push(action.payload);
        }
      })
      .addCase(deleteProductCart.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item._id !== action.meta.arg,
        );
      })
      .addCase(deleteByOneProduct.fulfilled, (state, action) => {
        if (action.payload) {
          const { _id, quantity } = action.payload;

          if (quantity > 0) {
            const itemIndex = state.items.findIndex((item) => item._id === _id);
            if (itemIndex > -1) {
              state.items[itemIndex] = action.payload;
            }
          }
        } else {
          state.items = state.items.filter(
            (item) => item._id !== action.meta.arg,
          );
        }
      });
  },
});

export default cartSlice.reducer;
