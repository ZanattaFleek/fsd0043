import { createBrowserRouter } from "react-router-dom"
import Login from "../login/Login"
import CadastroAtleta from "../atleta/CadastroAtleta"
import EventosEmAberto from "../eventos/EventosEmAberto"

export const RotasAPP = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/CadastroAtleta",
    element: <CadastroAtleta />,
  },
  {
    path: "/EventosEmAberto",
    element: <EventosEmAberto />,
  }
])
