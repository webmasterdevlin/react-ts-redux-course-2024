import { deleteHeroAction, getHeroesAction } from "../heroAsyncActions";
import { HeroStateType } from "../heroTypes";
import { reduxStore } from "../../../store/configureStore";

describe("HeroesPage dispatch", () => {
  let state: HeroStateType;

  beforeEach(() => {
    //
  });

  /* Select the store.getState().hero again
   * before running another expect. It's just how it is */

  it("should dispatch getHeroesAction", async () => {
    await reduxStore.dispatch(getHeroesAction());
    state = reduxStore.getState().hero;

    expect(state.heroes).toHaveLength(2);
  });

  test("should dispatch deleteHeroById with HTTP request", async () => {
    await reduxStore.dispatch(deleteHeroAction(state.heroes[0].id));
    state = reduxStore.getState().hero;
    expect(state.heroes).toHaveLength(1);
  });
});
