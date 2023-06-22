var nota01 = 4.9
var nota02 = 4.9
var nota03 = 4.9

var media = (nota01 + nota02 + nota03) / 3

if (media >= 7) {
    console.log('Aprovado com média: ', media)
} else if (media >= 5) {
    console.log('Em Recuperação | Dependência com média: ', media)
} else {
    console.log('Reprovado com média: ', media)
}