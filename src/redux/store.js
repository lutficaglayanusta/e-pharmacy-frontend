import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import medicineStoresReducer from "./medicine-stores/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    medicineStores: medicineStoresReducer,
  },
});
