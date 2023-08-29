import React, { useState } from "react";
// import "./App.css";
// import Botao from './Botao';
import {
  Button,
  Paper,
  IconButton,
  Container,
  TextField,
  Grid,
} from "@mui/material";
import Icon from "@mui/material/Icon";

// import Fingerprint from '@mui/icons-material/Fingerprint';

export default function App() {
  const [display, setDisplay] = useState<string>("");

  const acrescentarDisplay = (numero: string) => {
    setDisplay(display.concat(numero));
  };

  return (
    <>
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 5, borderRadius: "5%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={display}
                id="outlined-basic"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={3}>
              <Button
                onClick={() => acrescentarDisplay("1")}
                fullWidth
                variant="contained"
              >
                1
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                onClick={() => acrescentarDisplay("2")}
                fullWidth
                variant="contained"
              >
                2
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                3
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                +
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                4
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                5
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                6
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                -
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                7
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                8
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                9
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                *
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                CE
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                0
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                =
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                /
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                x^2
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                RAIZ
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                .
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button fullWidth variant="contained">
                BACK
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
