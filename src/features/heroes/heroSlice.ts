import { createSlice } from "@reduxjs/toolkit";
import { getHeroesAction } from "./heroAsyncActions";
import { HeroModel, heroNamespace, HeroStateType } from "./heroTypes";

// hero state
export const initialState: HeroStateType = {
  hero: {} as HeroModel,
  heroes: [] as HeroModel[],
  loading: false,
};

// hero store
export const heroSlice = createSlice({
  name: heroNamespace,
  initialState: initialState,
  reducers: {},

  // mutation using asynchronous actions
  extraReducers: (builder) => {
    builder.addCase(getHeroesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getHeroesAction.fulfilled, (state, action) => {
      state.heroes = action.payload;
      state.loading = false;
    });
    builder.addCase(getHeroesAction.rejected, (state, action: any) => {
      console.log(action.error);
      state.loading = false;
    });
  },

  // big switch cases
  // big if-else
});

export default heroSlice.reducer;
