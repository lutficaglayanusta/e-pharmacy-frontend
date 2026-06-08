import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCart = createAsyncThunk(
  "cart/add",
  async (crendentials, thunkAPI) => {
    try {
      const { data: res } = await axios.post("/cart", crendentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const fetchCart = createAsyncThunk("cart/fetch", async (_, thunkAPI) => {
  try {
    const { data: res } = await axios.get("/cart");
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const deleteProductCart = createAsyncThunk(
  "cart/delete",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/cart/${id}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const deleteByOneProduct = createAsyncThunk(
  "cart/deleteByOne",
  async (id, thunkAPI) => {
    try {
      const { data: res } = await axios.delete(`/cart/cart-one/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export const checkoutCart = createAsyncThunk(
  "cart/checkout",
  async (credentials, thunkAPI) => {
    try {
      await axios.post("/cart/checkout", credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
