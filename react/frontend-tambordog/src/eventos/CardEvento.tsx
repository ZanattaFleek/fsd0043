import React from "react";

// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CardEvento() {
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: "40%" }}
        image="/logo512.png"
        alt="Circuito Tambor Dog"
      />

      <Container>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h6" variant="h6">
            Circuito Etapa RJ
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Volta Redonda - RJ - 02/10/2023
          </Typography>
        </CardContent>
      </Container>
    </Card>
  );
}
