import React from "react";
import CardEvento from "./CardEvento";

export default function EventosEmAberto() {
  return (
    <>
      <h1>Eventos Em Aberto</h1>
      <CardEvento
        titulo={"Titulo do Evento"}
        imagem={"Imagem do Evento"}
        descricao={"Descricao do Evento"}
        qtdInscritos={20}
      />
    </>
  );
}
