import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import React from "react";
import { MainTheme } from "./MainTheme";

export const ThemeProvider = ({ children, ...props }) => {
  return (
    <MuiThemeProvider theme={MainTheme} {...props}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
