import { createAsyncThunk } from "@reduxjs/toolkit";
import { EndPoints } from "../../axios/api-config";
import { deleteAxios, getAxios } from "../../axios/generic-api-calls";
import { HeroActionTypes, HeroModel } from "./heroTypes";

export const getHeroesAction = createAsyncThunk(
  HeroActionTypes.FETCH_HEROES,
  async () => {
    // HTTP CALLS
    const response = await getAxios<HeroModel[]>(EndPoints.heroes);
    // Return the response
    return response.data; // payload
  }
);

export const deleteHeroAction = createAsyncThunk(
  HeroActionTypes.REMOVE_HERO_BY_ID,
  async (id: string) => {
    return await deleteAxios<void>(EndPoints.heroes, id);
  }
);
