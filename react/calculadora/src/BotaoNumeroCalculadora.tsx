import React from "react";

import {
  Button,
  Paper,
  IconButton,
  Container,
  TextField,
  Grid,
} from "@mui/material";

interface PropriedadesInterface {
  numero: number;
  dispararOnClick: (oque: string) => void;
  xs?: number;
}

// onClick={() => acrescentarDisplay("1")}

export default function BotaoNumeroCalculadora({
  numero,
  dispararOnClick,
  xs = 3,
}: PropriedadesInterface) {
  return (
    <>
      <Grid item xs={xs}>
        <Button
          onClick={() => dispararOnClick(numero.toString())}
          fullWidth
          variant="contained"
        >
          {numero}
        </Button>
      </Grid>
    </>
  );
}
