import { createSlice } from "@reduxjs/toolkit";
import { fetchMedicineStores } from "./operation";


const medicineStoresSlice = createSlice({
    name: "medicineStores",
    initialState: {
        stores: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMedicineStores.fulfilled, (state, action) => {
            state.stores = action.payload
        })
    }
})

export default medicineStoresSlice.reducer;