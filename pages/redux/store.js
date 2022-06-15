import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { users } from "./userSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

// master reducer for hydration
const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      users: {
        users: [...action.payload.users.users, ...state.users.users],
      },
    };
    return nextState;
  }
  return state;
};
export const makeStore = () =>
  configureStore({
    reducer: masterReducer,
  });

export const wrapper = createWrapper(makeStore);
