/*
xs, extra-small: 0px a 599px
sm, small: 600px a 899px
md, medium: 900px a 1199px
lg, large: 1200px a 1535px
xl, extra-large: 1536px >
*/

import React, { useState } from "react"

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
} from "@mui/material"
import InputFormat from "../components/InputFormat"
import InputSelect from "../components/InputSelect"

export default function CadastroAtleta() {
  const [erros, setErros] = useState({})

  const [dados, setDados] = useState({
    cpf: "",
    nome: "",
    senha: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    idEscola: 0,
  })

  return (
    <>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          lg={4}
          sx={{ backgroundColor: "yellow" }}
        >
          <Paper sx={{ padding: 3, margin: 3 }}>
            <Grid container>
              <Grid item xs={12} sx={{ textAlign: "center", mb: 3, mt: 3 }}>
                <img src="./logo192.png" style={{ maxWidth: "100px" }} />
              </Grid>

              <Grid item xs={12}>
                <InputFormat
                  label="CPF"
                  mask="000.000.000-00"
                  setDados={setDados}
                  dados={dados}
                  campo="cpf"
                  erros={erros}
                />
              </Grid>

              <Grid item xs={12}>
                <InputFormat
                  label="Nome"
                  setDados={setDados}
                  dados={dados}
                  campo="nome"
                  erros={erros}
                />
              </Grid>

              <Grid item xs={12}>
                <InputFormat
                  label="Data de Nascimento"
                  setDados={setDados}
                  dados={dados}
                  campo="dataNascimento"
                  erros={erros}
                  type="date"
                />
              </Grid>
              <Grid item xs={12}>
                <InputFormat
                  mask={
                    dados.telefone.length <= 14
                      ? "(00) 0000-00000"
                      : "(00) 00000-0000"
                  }
                  label="Telefone"
                  setDados={setDados}
                  dados={dados}
                  campo="telefone"
                  erros={erros}
                  type="tel"
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <InputFormat
                label="e-mail"
                setDados={setDados}
                dados={dados}
                campo="email"
                erros={erros}
                type="email"
              />
            </Grid>

            <Grid item xs={12}>
              <InputSelect
                label="Vinculo"
                setDados={setDados}
                dados={dados}
                campo="idEscola"
                erros={erros}
                opcoes={[
                  { idEscola: 0, descricao: "Sem Escola" },
                  { idEscola: 1, descricao: "Cia Cães" },
                  { idEscola: 2, descricao: "Fleek Cursos" },
                ]}
                nomeCampoChaveOpcoes='idEscola'
                nomeCampoDescricaoOpcoes='descricao'
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <p>{JSON.stringify(dados)}</p>

      <p>{dados.telefone.length}</p>
    </>
  )
}
