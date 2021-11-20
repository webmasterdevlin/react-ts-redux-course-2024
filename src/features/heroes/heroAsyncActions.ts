import { createAsyncThunk } from "@reduxjs/toolkit";
import { HeroActionTypes, HeroModel } from "./heroTypes";

export const getHeroesAction = createAsyncThunk(
  HeroActionTypes.FETCH_HEROES,
  () => {
    // HTTP CALLS
    // Return the response
  }
);
