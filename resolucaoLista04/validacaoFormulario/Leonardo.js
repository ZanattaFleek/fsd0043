const empresa = "Marcio Zanatta"

const palavras = empresa.split(' ');

if (palavras.length < 2) {
    console.log('Forneça o nome completo....')
} else {
    console.log('Este nome está completo....')
}