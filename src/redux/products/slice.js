import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductById } from "./operation";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    page: 0,
    perPage: 0,
    totalItems: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    product: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload.products;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;
        state.hasNextPage = action.payload.hasNextPage;
        state.hasPreviousPage = action.payload.hasPreviousPage;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export default productsSlice.reducer;
