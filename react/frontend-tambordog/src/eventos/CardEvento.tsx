import React from "react";

// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";

interface PropsInterface {
  titulo: string;
  imagem: string;
  cidade: string;
  uf: string;
  data: string;
  qtdInscritos: number;
}

export default function CardEvento({
  titulo,
  imagem,
  cidade,
  uf,
  data,
  qtdInscritos,
}: PropsInterface) {
  return (
    <Card sx={{ maxWidth: '300px', display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: "150px" }}
        image={"/".concat(imagem)}
        alt="Circuito Tambor Dog"
      />

      <Container>
        <CardContent sx={{ alignContent: "left", textAlign: "left" }}>
          <Typography component="h6" variant="h6">
            {titulo}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {cidade} - {uf} - {data}
          </Typography>

          <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="/logo192.png" />
            <Avatar alt="Remy Sharp" src="/logo192.png" />
            <Avatar alt="Remy Sharp" src="/logo192.png" />
            <Avatar alt="Remy Sharp" src="/logo192.png" />
            <Avatar alt="Remy Sharp" src="/logo192.png" />
          </AvatarGroup>
        </CardContent>
      </Container>
    </Card>
  );
}
