import { createSlice } from "@reduxjs/toolkit";

// initial state for the login slice
export const loginSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    pending: false,
    error: false,
    loggedIn: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    // add user start
    addUserStart: (state) => {
      state.pending = true;
    },
    // add user end
    addUserEnd: (state, action) => {
      state.pending = false;
      state.user = action.payload;
      state.loggedIn = true;
    },
    // add user fail
    addUserFail: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { addUserStart, addUserEnd, addUserFail } = loginSlice.actions;

export default loginSlice.reducer;
