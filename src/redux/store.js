import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import medicineStoresReducer from "./medicine-stores/slice";
import productsReducer from "./products/slice";
import cartReducer from "./cart/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/es/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    medicineStores: medicineStoresReducer,
    products: productsReducer,
    carts: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "auth/login/rejected",
          "auth/register/rejected",
        ],
      },
    }),
});

export const persistor = persistStore(store);
