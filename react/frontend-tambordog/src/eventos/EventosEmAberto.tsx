import React from "react";
import CardEvento from "./CardEvento";

export default function EventosEmAberto() {
  return (
    <>
      <h1>Eventos Em Aberto</h1>
      <CardEvento
        titulo={"Circuito Etapa RJ"}
        imagem={"logo512.png"}
        cidade={"Volta Redonda"}
        uf={"RJ"}
        data={"02/10/2023"}
        qtdInscritos={20}
      />
    </>
  );
}
