import { combineReducers } from "redux";

import heroReducer from "../features/heroes/heroSlice";

const injectedReducers = {
  hero: heroReducer,
  // more reducers to come
};

const rootReducer = combineReducers({
  ...injectedReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReducer = () => rootReducer;
