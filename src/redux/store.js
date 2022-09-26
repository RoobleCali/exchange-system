import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { decodeToken, logout } from "../components/utils/utils";
import { taskApi } from "./api/UserApi";

const appReducer = combineReducers({
  [taskApi.reducerPath]: taskApi.reducer,
});

const rootReducer = (state, action) => {
  const token = decodeToken();
  if (!token) {
    state = undefined;
  }

  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
