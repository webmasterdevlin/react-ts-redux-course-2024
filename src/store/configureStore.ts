import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { heroSlice } from "../features/heroes/heroSlice";

const reduxStore = configureStore({
  preloadedState: load(),

  reducer: {
    // rtk
    hero: heroSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(save()),

  devTools:
    process.env.NODE_ENV !== "production" || process.env.PUBLIC_URL.length > 0,
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

// to know the right types for dispatch
const useAppDispatch = () => useDispatch<AppDispatch>();
// to know the right types for state
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { reduxStore, useAppDispatch, useAppSelector };
