import { combineReducers, configureStore } from "@reduxjs/toolkit/query";
import { getCookie } from "cookies-next";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import login from "./slices/loginSlice";
const token = getCookie("token");
console.log(token);
const combinedReducer = combineReducers({
  login,
});

const masterReducer = (state, action) => {
  if (!token) {
    state = undefined;
  }
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      // login: { ...action.payload.login.login },
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () => {};
configureStore({
  reducer: masterReducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(reducer.middleware),
});

export const wrapper = createWrapper(makeStore);
// setupListeners(wrapper);
