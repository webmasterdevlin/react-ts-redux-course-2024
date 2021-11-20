import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { forceReducerReload } from "redux-injectors";
import { createReducer } from "./reducers";

export function configureAppStore() {
  const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }),
    ],
    devTools:
      process.env.NODE_ENV !== "production" ||
      process.env.PUBLIC_URL.length > 0,
  });

  if ((module as any).hot) {
    (module as any).hot.accept("./reducers", () => {
      forceReducerReload(store);
    });
  }

  return store;
}
