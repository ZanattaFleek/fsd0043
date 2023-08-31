import React, { useState } from "react";
import "./Aula.css";

interface PropsInterface {
  frase: string;
  id: string;
  escola: {
    nome: string;
    contador: number;
  };
}

export default function Aula({ id, frase, escola }: PropsInterface) {
  // console.log("Estou Dentro do Início do Componente Aula id:".concat(id));

  frase = frase.concat(".");

  let contador: number = 0;

  const [incremento, setIncremento] = useState<number>(0);

  const idTxtContador: string = "txtContador".concat(id);

  const somarContador = () => {
    const elemento: HTMLElement = document.getElementById(
      idTxtContador
    ) as HTMLElement;

    contador = contador + 1;

    setIncremento(incremento + 1);

    console.log(contador);

    elemento.innerHTML = contador.toString();

    escola.contador = escola.contador + 1;
    escola.nome = escola.nome.concat(".");

    console.log(escola);
  };

  return (
    <>
      <p id={idTxtContador}></p>
      <input
        type="button"
        onClick={() => somarContador()}
        value="Somar Contador"
      />
      <p>Conteúdo de Incremento: {incremento}</p>
      <p>Conteúdo de nome da Escola: {escola.nome}</p>
      <p>Contador de Escola: {escola.contador}</p>
      <p>Conteúdo de Frase: {frase}</p>
      <div className="linha" />
    </>
  );
}
