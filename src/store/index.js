import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { decodeToken, getToken } from "../components/utils/utils";
import { REHYDRATE } from "redux-persist";

export const Rootapi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.167.67.107:5000/api/",
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === REHYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: () => ({}),
});

const appReducer = combineReducers({
  [Rootapi.reducerPath]: Rootapi.reducer,
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Rootapi.middleware),
});
