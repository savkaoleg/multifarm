import React from "react";
import { useRecoilState } from "recoil";

import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import themeAtom from "../recoil/theme";
import { DARK, LIGHT } from "../themes";
import { ThemeId } from "../themes/types";

export default function ThemeSwitcher() {
  const [themeId, setThemeId] = useRecoilState(themeAtom);

  const handleSwitch = () => {
    let newThemeId: ThemeId = themeId === DARK ? LIGHT : DARK;

    setThemeId(newThemeId);
  };

  return (
    <FormControlLabel
      labelPlacement='end'
      label={"Use dark mode"}
      control={<Switch checked={DARK === themeId} onChange={handleSwitch} />}
    />
  );
}
