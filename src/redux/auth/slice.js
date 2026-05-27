import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
    },
    isLoggedIn: false,
    isRefreshing: false,
    token: null,
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
        state.isLoggedIn = true;
        state.token = action.payload.token;
    })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoggedIn = false;
        state.token = null;
      })
  },
});

export default authSlice.reducer;