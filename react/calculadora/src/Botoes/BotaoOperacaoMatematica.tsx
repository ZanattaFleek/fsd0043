import React from "react";

import { Button, Grid } from "@mui/material";

interface PropriedadesInterface {
  operacao: string;
  dispararOnClick: (operacao: string) => void;
  xs?: number;
}

export default function BotaoOperacaoMatematica({
  operacao,
  dispararOnClick,
  xs = 3,
}: PropriedadesInterface) {
  return (
    <>
      <Grid item xs={xs}>
        <Button
          onClick={() => dispararOnClick(operacao)}
          fullWidth
          variant="contained"
        >
          {operacao}
        </Button>
      </Grid>
    </>
  );
}
