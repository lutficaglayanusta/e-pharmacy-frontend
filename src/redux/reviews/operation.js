import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReviews = createAsyncThunk("reviews/fecth", async (_, thunkAPI) => {
    try {
        const { data: res } = await axios.get("/reviews");
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})