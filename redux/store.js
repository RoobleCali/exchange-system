import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import login from "./slices/loginSlice";
import counter from "./slices/counterSlice";

const combinedReducer = combineReducers({
  login,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      login: { ...action.payload.login.login },
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore);
