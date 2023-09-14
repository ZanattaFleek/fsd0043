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
import BotaoNumeroCalculadora from "./BotaoNumeroCalculadora";

// import Fingerprint from '@mui/icons-material/Fingerprint';

export default function App() {
  const [display, setDisplay] = useState<string>("");

  const acrescentarDisplay = (numero: string) => {
    setDisplay(display.concat(numero));
  };

  return (
    <>
      <Container maxWidth="xs">
        <Paper elevation={15} sx={{ padding: 3, borderRadius: "5%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={display}
                id="outlined-basic"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <BotaoNumeroCalculadora dispararOnClick={(oque: string) => acrescentarDisplay(oque)} numero={1} />
            <BotaoNumeroCalculadora dispararOnClick={(oque: string) => acrescentarDisplay(oque)} numero={2} />
            <BotaoNumeroCalculadora dispararOnClick={(oque: string) => acrescentarDisplay(oque)} numero={3} />
            <BotaoNumeroCalculadora dispararOnClick={(oque: string) => acrescentarDisplay(oque)} numero={4} />
            <BotaoNumeroCalculadora dispararOnClick={(oque: string) => acrescentarDisplay(oque)} numero={5} />
            <BotaoNumeroCalculadora dispararOnClick={(oque: string) => acrescentarDisplay(oque)} numero={6} />
            <BotaoNumeroCalculadora dispararOnClick={(oque: string) => acrescentarDisplay(oque)} numero={7} />
            <BotaoNumeroCalculadora dispararOnClick={(oque: string) => acrescentarDisplay(oque)} numero={8} />
            <BotaoNumeroCalculadora dispararOnClick={(oque: string) => acrescentarDisplay(oque)} numero={9} />
            <BotaoNumeroCalculadora xs={12} dispararOnClick={(oque: string) => acrescentarDisplay(oque)} numero={0} />

          </Grid>
        </Paper>
      </Container>
    </>
  );
}
