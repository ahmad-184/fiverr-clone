import { useMemo } from "react";
import { createTheme } from "@mui/material";

const themeSettings = {
  typography: {
    fontFamily: "macan,Domaine-Display,sans-serif",
  },
  palette: {
    primary: {
      main: "#1dbf73",
    },
  },
};

const Theme = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return theme;
};

export default Theme;
