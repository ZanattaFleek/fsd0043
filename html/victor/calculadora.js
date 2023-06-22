var numeroAtual = ""

function multiplicar() {
    console.log('Dentro do Multiplicar')
}

function adicao() {
    console.log('Dentro do adicao')
}

function teclaPressionada(numero) {

    if (numero === '.' && numeroAtual.includes('.')) {
        console.log('Não Vou Considerar, já tem ponto no número')
    } else {
        numeroAtual = numeroAtual.concat(numero)
        document.getElementById('txtDisplay').value = numeroAtual
        console.log('Número Atual: ', numeroAtual)
    }
}