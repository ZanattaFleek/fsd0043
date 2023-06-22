const frase = 'Fleek Cursos Escola de Programação - Instrutor Zanatta'

var fraseInvertida = ''

for (let c = frase.length - 1; c >= 0; c = c - 1) {
    fraseInvertida = fraseInvertida + frase.charAt(c)
}

console.log(fraseInvertida)