function eVogal(letra) {

    const vogais = 'aeiouáéíóúâêôãàä'

    return vogais.includes(letra.toLowerCase())

}

const frase = 'Fleek Cursos Escola de Programação - Instrutor Zanatta'

var contadorDeVogais = 0

for (let c = frase.length - 1; c >= 0; c = c - 1) {
    if (eVogal(frase.charAt(c))) {
        contadorDeVogais = contadorDeVogais + 1
    }
}

console.log('Esta frase tem ', contadorDeVogais, ' vogais.')


