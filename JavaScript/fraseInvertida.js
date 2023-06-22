const frase = 'Fleek Cursos - Escola de Programação'

var contador = frase.length - 1
var fraseInvertida = ''

while (contador >= 0) {
    fraseInvertida = fraseInvertida + frase.charAt(contador)
    contador = contador - 1
}

console.log(fraseInvertida)
