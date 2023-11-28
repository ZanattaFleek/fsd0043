import React from "react";
import EventosEmAberto from "./eventos/EventosEmAberto";
import Login from "./login/Login";
import { ThemeProvider } from "@mui/material";
import { theme } from "./layout/Theme";
import CadastroAtleta from "./atleta/CadastroAtleta";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CadastroAtleta />
      </ThemeProvider>
    </>
  );
}

export default App;
