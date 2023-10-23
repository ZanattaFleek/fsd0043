import React from "react";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";

export default function Login() {
  return (
    <>
      <Grid container minHeight="100vh" alignContent="center">
        <Grid item sm={2} md={3}></Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Paper sx={{ padding: 3 }}>
            <Grid container>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <img src="./logo192.png" />
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <TextField label="CPF" fullWidth />
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <TextField label="Senha" type="password" fullWidth />
              </Grid>

              <Grid item xs={6} sx={{ mt: 3 }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Lembrar-me"
                />
              </Grid>

              <Grid item xs={6} sx={{ textAlign: "right", mt: 3 }}>
                <Button variant="text">Cadastrar</Button>
              </Grid>

              <Grid item xs={12} sx={{ mt: 3 }}>
                <Button fullWidth variant="contained">
                  Entrar
                </Button>
              </Grid>

              <Grid item xs={12} sx={{ textAlign: "center", mt: 3 }}>
                <Button variant="text">Esqueci a Senha</Button>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
