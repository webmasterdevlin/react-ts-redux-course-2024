export type HeroStateType = {
  readonly heroes: HeroModel[];
  readonly hero: HeroModel;
  readonly loading: boolean;

  readonly tempData?: any;
};

export type HeroModel = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
};

// action types
export const heroNamespace = "hero";

export const HeroActionTypes = {
  FETCH_HEROES: `${heroNamespace}/FETCH_HEROES`,
  REMOVE_HERO_BY_ID: `${heroNamespace}/REMOVE_HERO_BY_ID`,
  ADD_HERO: `${heroNamespace}/ADD_HERO`,
};
