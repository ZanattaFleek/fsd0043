import React, { useState } from "react"

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
} from "@mui/material"

import { useTheme } from "@mui/material/styles"
import InputFormat from "../components/InputFormat"
import InputPassword from "../components/InputPassword"
import ClsValidacao from "../utils/ClsValidacao"

export default function Login() {
  const theme = useTheme()

  const [erros, setErros] = useState({})

  const [dados, setDados] = useState({
    cpf: "",
    senha: "",
  })

  const validarDados = (): boolean => {
    const clsValidacao: ClsValidacao = new ClsValidacao()

    let retorno: boolean = true

    let tmpErros: Record<string, string> = {}

    // Posso declarar o tmpErros da forma abaixo.... mesma declaração com Record<T,T>
    // let tmpErros: { [key: string]: string } = {}

    retorno = clsValidacao.eCPF("cpf", dados, tmpErros, retorno)

    retorno = clsValidacao.naoVazio("senha", dados, tmpErros, retorno)
    retorno = clsValidacao.tamanho(
      "senha",
      dados,
      tmpErros,
      retorno,
      false,
      6,
      10,
      "Campo deve ter entre 6 e 10 caracteres"
    )

    setErros(tmpErros)

    return retorno
  }

  const btEntrar = () => {
    if (validarDados()) {
      // Ação para Fazer a Entrada no Sistema....
    }
  }

  return (
    <>
      <Grid
        container
        minHeight="100vh"
        justifyContent="center"
        alignContent="center"
      >
        <Grid item xs={12} sm={8} md={5} lg={4}>
          <Paper sx={{ padding: 3, margin: 3 }}>
            <Grid container>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <img src="./logo192.png" style={{ maxWidth: "100px" }} />
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <InputFormat
                  label="CPF"
                  mask="000.000.000-00"
                  setDados={setDados}
                  dados={dados}
                  campo="cpf"
                  erros={erros}
                />
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <InputPassword
                  campo="senha"
                  label="Senha"
                  dados={dados}
                  setDados={setDados}
                  erros={erros}
                />
              </Grid>

              <Grid item xs={6} sx={{ mt: 3 }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Lembrar-me"
                />
              </Grid>

              <Grid item xs={6} sx={{ textAlign: "right", mt: 4.5 }}>
                <Link>Esqueci a Senha</Link>
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <Button
                  onClick={() => btEntrar()}
                  fullWidth
                  variant="contained"
                >
                  Entrar
                </Button>
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                <Link>Registrar-se</Link>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                Dados:
                {JSON.stringify(dados)}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
