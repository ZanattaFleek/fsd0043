var salario = 1800
var limiteIR = 1900
var percentualDeIR = 15 / 100   // Camel Case 
var desconto = 0

if (salario > limiteIR) {
    desconto = (salario * percentualDeIR)
}

console.log('O Desconto do IR é: ', desconto)
