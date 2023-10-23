import React from "react";
import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    corBotao: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    corBotao?: string;
  }
}

export const theme = createTheme({
  corBotao: "#9033FF",
});
