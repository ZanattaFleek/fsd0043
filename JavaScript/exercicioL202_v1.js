var nota01 = 7
var nota02 = 8.5
var nota03 = 10

var media = (nota01 + nota02 + nota03) / 3

if (media >= 7) {
    console.log("Aprovado")
}

// Se Média for Maior ou igual a 5 >>>>> E <<<<<< Se Média for Menor que 7
if (media >= 5 && media < 7) {
    console.log('Recuperação | Dependência')
}

if (media < 5) console.log('Reprovado')