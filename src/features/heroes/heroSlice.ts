import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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

  // mutation using synchronous actions or without side effects
  reducers: {
    softDeleteHeroAction: (state, action: PayloadAction<string>) => {
      state.heroes = state.heroes.filter((h) => h.id !== action.payload); // payload is the id of the object
    },
  },

  // mutation using asynchronous actions or with side effects
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

// non-async actions
export const { softDeleteHeroAction } = heroSlice.actions;

export default heroSlice.reducer;
