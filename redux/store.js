import { combineReducers, configureStore } from "@reduxjs/toolkit/query";
import { setupListeners } from "@reduxjs/toolkit/query";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import login from "./slices/loginSlice";

const combinedReducer = combineReducers({
  login,
});

const masterReducer = (state, action) => {
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
