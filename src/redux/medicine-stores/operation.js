import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchMedicineStores = createAsyncThunk('medicineStores/fetchAll', async (_, thunkAPI) => {
    try {
        const { data: res } = await axios.get("/stores/nearest");
        return res.data
    }catch(error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})