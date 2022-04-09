import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { villainSlice } from "../features/villains/query";

const reduxStore = configureStore({
  reducer: {
    // rtk query
    [villainSlice.reducerPath]: villainSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(villainSlice.middleware), // for query caching

  devTools:
    process.env.NODE_ENV !== "production" || process.env.PUBLIC_URL.length > 0,
});

export type AppDispatch = typeof reduxStore.dispatch;

// to know the right types for dispatch
const useAppDispatch = () => useDispatch<AppDispatch>();

export { reduxStore, useAppDispatch };
