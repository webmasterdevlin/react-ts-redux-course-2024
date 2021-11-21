import { v4 as uuidv4 } from "uuid";
import { store } from "../../../App";
import { deleteHeroAction, getHeroesAction } from "../heroAsyncActions";
import { softDeleteHeroAction } from "../heroSlice";
import { HeroStateType } from "../heroTypes";

describe("HeroesPage dispatch", () => {
  let state: HeroStateType;

  beforeEach(() => {
    //
  });

  /* Select the store.getState().hero again
   * before running another expect. It's just how it is */

  it("should dispatch getHeroesAction", async () => {
    await store.dispatch(getHeroesAction());
    state = store.getState().hero;

    expect(state.heroes).toHaveLength(2);
  });

  test("shoudl dispatch deleteHeroById with HTTP reques", async () => {
    await store.dispatch(deleteHeroAction(state.heroes[0].id));
    state = store.getState().hero;
    expect(state.heroes).toHaveLength(1);
  });
});
