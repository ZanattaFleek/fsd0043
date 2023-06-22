var nota01 = 10
var nota02 = 10
var nota03 = 8

var media = (nota01 + nota02 + nota03) / 3

if (media >= 7) {
    console.log('Aprovado com média: ', media)
}

if (media >= 5 && media < 7) {
    console.log('Em Recuperação | Dependência com média: ', media)

} else if (media < 5) {
    console.log('Reprovado com média: ', media)
}