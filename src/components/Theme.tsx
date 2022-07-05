import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useRecoilValue } from "recoil";
import themeAtom from "../recoil/theme";

export default function Theme({ children }) {
  const themeId = useRecoilValue(themeAtom);
  const Theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeId,
        },
      }),
    [themeId]
  );

  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}
