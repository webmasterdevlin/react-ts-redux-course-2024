import { configureStore } from "@reduxjs/toolkit";
import { save, load } from "redux-localstorage-simple";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { heroSlice } from "../features/heroes/heroSlice";

const reduxStore = configureStore({
  preloadedState: load(),

  reducer: {
    hero: heroSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => [
    save(),
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],

  devTools:
    process.env.NODE_ENV !== "production" || process.env.PUBLIC_URL.length > 0,
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { reduxStore, useAppDispatch, useAppSelector };
