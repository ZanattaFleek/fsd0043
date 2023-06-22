var numero1 = 3;
var numero2 = "3";

/**
 * 
 * numero1 tem conteúdo igual a numero2 
 * E tipo de numero2 igual a number 
 * E tipo de numero1 igual a number
 * 
 */

var condicao = numero1 == numero2
    && typeof numero2 == 'number'
    && typeof numero1 == 'number'

if (condicao) {
    console.log('Os números são iguais')
} else {
    console.log('Os números não são iguais')
}

console.log('Valor de Condição:', condicao)
console.log('Tipo de Condição:', typeof condicao)