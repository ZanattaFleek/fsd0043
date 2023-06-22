/*
2 - Escreva um programa que a partir de uma constante,
verifique se seu conteúdo é divisível por 3 e 5 ao mesmo tempo.

Definição: Um número é divisível por 3 quando eu divido ele por 3 e o resto é igual a 0

Definição: Um número é divisível por 5 quando eu divido ele por 5 e o resto é igual a 0
*/

const numero = 15

const restoDivisaoPor3 = numero % 3

const restoDivisaoPor5 = numero % 5

if (restoDivisaoPor3 == 0 && restoDivisaoPor5 == 0) {
    // if (((numero % 3) == 0) && ((numero % 5) == 0)) {
    console.log('Este número é divisível por 3 e por 5')
} else {
    console.log('Este número não é divisível por 3 e por 5')
}