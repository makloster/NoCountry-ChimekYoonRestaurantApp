import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { todosApi } from "../features/items/itemSlice";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
