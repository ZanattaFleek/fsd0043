var idade = 2023

var fator = ((10.5 * 2) / (5.5 ^ 3))

var disponivel = true

var cliente = {
    nome: 'Zanatta',
    empresa: 'Fleek Cursos',
    idade: 26
}

console.log(cliente.nome.toUpperCase())

cliente.nome = 'Marcelo'

console.log(cliente.nome.toUpperCase())

var frase = cliente.nome
    .concat(' faz parte do quadro de ')
    .concat(cliente.empresa)
    .concat(' há ')
    .concat(cliente.idade.toString())
    .concat(' anos')

console.log(frase)
