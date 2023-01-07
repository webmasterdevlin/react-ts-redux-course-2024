import { heroHandler } from "./heroHandler";
import { villainHandler } from "./villainHandler";

export const handlers = [...heroHandler, ...villainHandler];
