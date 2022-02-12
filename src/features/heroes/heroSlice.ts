import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  deleteHeroAction,
  getHeroesAction,
  postHeroAction,
} from "./heroAsyncActions";
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

    // DELETE - optimistic update
    builder.addCase(deleteHeroAction.pending, (state, action) => {
      state.tempData = [...state.heroes]; // for rolling back

      const index = state.heroes.findIndex((h) => h.id === action.meta.arg);
      state.heroes.splice(index, 1);
    });

    builder.addCase(deleteHeroAction.rejected, (state, action: any) => {
      state.heroes = state.tempData as HeroModel[];
    });

    builder.addCase(postHeroAction.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(postHeroAction.fulfilled, (state, action) => {
      state.heroes.push(action.payload);
      state.loading = false;
    });

    builder.addCase(postHeroAction.rejected, (state, action) => {
      console.log(action.error);
      state.loading = false;
    });
  },
});

// non-async actions
export const { softDeleteHeroAction } = heroSlice.actions;
