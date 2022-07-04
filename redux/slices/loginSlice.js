import { createSlice } from "@reduxjs/toolkit";

// initial state for the login slice
const initialState = {
  isLoggedIn: false,
  user: {},
  token: "",
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.login = action.payload;
    },
  },
});

export const { Login } = loginSlice.actions;

export default loginSlice.reducer;
