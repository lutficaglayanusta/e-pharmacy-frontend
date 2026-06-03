import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './operation';

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
  },
  extraReducers: (builder) => {
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload.products;
        state.page = action.payload.page;
        state.perPage = action.payload.perPage;
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;
        state.hasNextPage = action.payload.hasNextPage;
        state.hasPreviousPage = action.payload.hasPreviousPage;
    });
  },
});


export default productsSlice.reducer;