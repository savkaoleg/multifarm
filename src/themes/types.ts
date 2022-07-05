import { DARK, LIGHT } from "./index";

export type ThemeId = typeof DARK | typeof LIGHT;

export interface Theme {
  id: ThemeId;
}
