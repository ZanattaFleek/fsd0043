import React from "react"
import Login from "./login/Login"
import { ThemeProvider } from "@mui/material"
import { theme } from "./layout/Theme"
import {
  ContextoGlobal,
  ContextoGlobalInterface,
} from "./globalstate/ContextoGlobal"
import { useUsuarioState } from "./globalstate/UsuarioState"
import { useLayoutState } from "./globalstate/LayoutState"
import CadastroAtleta from "./atleta/CadastroAtleta"
import { Outlet } from "react-router-dom"
import Condicional from "./components/Condicional"

function App() {
  const { usuarioState, setUsuarioState } = useUsuarioState()
  const { layoutState, setLayoutState } = useLayoutState()

  const ContextoGlobalDefault: ContextoGlobalInterface = {
    setUsuarioState: setUsuarioState,
    usuarioState: usuarioState,
    layoutState: layoutState,
    setLayoutState: setLayoutState,
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <h2>Estado do Usuário State</h2>
        <h2>{JSON.stringify(usuarioState)}</h2>

        <ContextoGlobal.Provider value={ContextoGlobalDefault}>
          <Condicional condicao={usuarioState.logado}>
            <Outlet />
          </Condicional>

          <Condicional condicao={!usuarioState.logado}>
            <Login />
          </Condicional>
        </ContextoGlobal.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
