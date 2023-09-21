import React from "react";

import {
  Button,
  Grid,
} from "@mui/material";

interface PropriedadesInterface {
  dispararOnClick: () => void;
  xs?: number;
}

export default function BotaoPontoDecimal({
  dispararOnClick,
  xs = 3,
}: PropriedadesInterface) {
  return (
    <>
      <Grid item xs={xs}>
        <Button onClick={() => dispararOnClick()} fullWidth variant="contained">
          .
        </Button>
      </Grid>
    </>
  );
}
