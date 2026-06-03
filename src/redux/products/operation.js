import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ category = "", name = "", page = 1 }, { rejectWithValue }) => {
    const params = new URLSearchParams();

    if (category) {
      params.append("category", category);
    }
    if (name) {
      params.append("name", name);
    }
    params.append("page", page);

    const query = params.toString()
      ? `/products?${params.toString()}`
      : "/products?page=1";

    try {
      const { data: res } = await axios.get(query);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
