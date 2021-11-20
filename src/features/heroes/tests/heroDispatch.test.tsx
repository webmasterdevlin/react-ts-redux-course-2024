import { v4 as uuidv4 } from "uuid";
import { store } from "../../../App";
import { getHeroesAction } from "../heroAsyncActions";
import { HeroStateType } from "../heroTypes";

describe("HeroesPage dispatch", () => {
  let state: HeroStateType;

  it("should dispatch getHeroesAction", async () => {
    await store.dispatch(getHeroesAction());
    state = store.getState().hero;

    expect(state.heroes).toHaveLength(2);
  });
});
