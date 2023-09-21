import React, { useState } from "react";
import { Paper, Container, TextField, Grid } from "@mui/material";
import BotaoNumeroCalculadora from "./Botoes/BotaoNumeroCalculadora";
import BotaoPontoDecimal from "./Botoes/BotaoPontoDecimal";
import BotaoOperacaoMatematica from "./Botoes/BotaoOperacaoMatematica";

// import Fingerprint from '@mui/icons-material/Fingerprint';

export default function App() {
  // Valor Atual digitado para a operação Anterior
  const [valor, setValor] = useState<string>("0");

  // Para Ser Exibido ao Usuário
  const [resultado, setResultado] = useState<string>("0");

  // Última Operação Escolhida pelo Usuário - A ser realizada entre ValorAnterior e Valor
  const [operacaoArmazenada, setOperacaoArmazenada] = useState("");

  // Valor Armazenado no momento em que o usuário escolheu a operação
  const [valorAnterior, setValorAnterior] = useState(0);

  const numeroDigitado = (numero: string) => {
    const resultado: string = valor.concat(numero);
    setValor(resultado);
    setResultado(resultado);
  };

  const pontoDecimalDigitado = () => {
    if (!valor.includes(".")) numeroDigitado(".");
  };

  const formatarNumero = (): string => {
    const formato = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 9,
    });

    return formato.format(parseFloat(resultado));
  };

  const btOperacaoMatematica = (operacao: string) => {
    calcularOperacaoArmazenada();
    setOperacaoArmazenada(operacao);
  };

  const calcularOperacaoArmazenada = () => {
    let tmpResultado: number = 0;

    if (operacaoArmazenada == "+") {
      tmpResultado = valorAnterior + parseFloat(valor);
    } else if (operacaoArmazenada == "-") {
      tmpResultado = valorAnterior - parseFloat(valor);
    } else if (operacaoArmazenada == "*") {
      tmpResultado = valorAnterior * parseFloat(valor);
    } else if (operacaoArmazenada == "/" && parseFloat(valor) !== 0) {
      tmpResultado = valorAnterior / parseFloat(valor);
    } else {
      tmpResultado = parseFloat(valor);
    }

    setValorAnterior(tmpResultado);
    setResultado(tmpResultado.toString());
    setValor("0");
  };

  return (
    <>
      <Container maxWidth="xs">
        <Paper elevation={15} sx={{ padding: 3, borderRadius: "5%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                value={formatarNumero()}
                id="outlined-basic"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <BotaoNumeroCalculadora
              dispararOnClick={(oque: string) => numeroDigitado(oque)}
              numero={1}
            />
            <BotaoNumeroCalculadora
              dispararOnClick={(oque: string) => numeroDigitado(oque)}
              numero={2}
            />
            <BotaoNumeroCalculadora
              dispararOnClick={(oque: string) => numeroDigitado(oque)}
              numero={3}
            />
            <BotaoNumeroCalculadora
              dispararOnClick={(oque: string) => numeroDigitado(oque)}
              numero={4}
            />
            <BotaoNumeroCalculadora
              dispararOnClick={(oque: string) => numeroDigitado(oque)}
              numero={5}
            />
            <BotaoNumeroCalculadora
              dispararOnClick={(oque: string) => numeroDigitado(oque)}
              numero={6}
            />
            <BotaoNumeroCalculadora
              dispararOnClick={(oque: string) => numeroDigitado(oque)}
              numero={7}
            />
            <BotaoNumeroCalculadora
              dispararOnClick={(oque: string) => numeroDigitado(oque)}
              numero={8}
            />
            <BotaoNumeroCalculadora
              dispararOnClick={(oque: string) => numeroDigitado(oque)}
              numero={9}
            />

            <BotaoPontoDecimal dispararOnClick={() => pontoDecimalDigitado()} />

            <BotaoNumeroCalculadora
              xs={12}
              dispararOnClick={(oque: string) => numeroDigitado(oque)}
              numero={0}
            />

            <BotaoOperacaoMatematica
              operacao="+"
              dispararOnClick={(operacao) => btOperacaoMatematica(operacao)}
            />

            <BotaoOperacaoMatematica
              operacao="-"
              dispararOnClick={(operacao) => btOperacaoMatematica(operacao)}
            />
          </Grid>
        </Paper>

        <table>
          <tbody>
            <tr>
              <td>Valor: </td>
              <td>{valor}</td>
            </tr>
            <tr>
              <td>Valor Anterior: </td>
              <td>{valorAnterior}</td>
            </tr>
            <tr>
              <td>Operacao Armazenada: </td>
              <td>{operacaoArmazenada}</td>
            </tr>
            <tr>
              <td>Resultado: </td>
              <td>{resultado}</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  );
}
