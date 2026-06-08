import { createSlice } from "@reduxjs/toolkit";
import { fetchReviews } from "./operation";

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    items: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export default reviewSlice.reducer;
