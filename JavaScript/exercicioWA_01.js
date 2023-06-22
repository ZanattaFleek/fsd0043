/*

1 - Escreva um programa que a partir de uma constante,
verifique se seu conteúdo é número e,
se for, se ele é  positivo, negativo ou zero..

*/

const meuSalarioPequenoMinimo = -100

if (typeof meuSalarioPequenoMinimo == "number") {

    if (meuSalarioPequenoMinimo > 0) {
        console.log("O número é Positivo")
    } else if (meuSalarioPequenoMinimo < 0) {
        console.log("O número é Negativo")
    } else {
        console.log("O número é Positivo e Zero")
    }

} else {
    console.log("Esta não é uma constante numérica!!!!")
}





