import { atom } from "recoil";
import recoilPersist from "../recoilPersist";
import { themes } from "../../themes";
import { ThemeId } from "../../themes/types";
const defaultTheme = themes[1]; // Dark by default

const themeAtom = atom<ThemeId>({
  key: "theme",
  default: defaultTheme.id,
  effects: [recoilPersist()],
});

export default themeAtom;
