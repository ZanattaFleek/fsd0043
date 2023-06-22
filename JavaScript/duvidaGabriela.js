let media = 8

let nome = "Gabriela"

if (media >= 7) {
    
    console.log('O Aluno: '.concat(nome).concat(' foi ').concat("Aprovado"))

} else if (media >= 5 && media < 7) {

    console.log('O Aluno: '.concat(nome).concat(' está em ').concat("Recuperação"))

} else {

    console.log('O Aluno: '.concat(nome).concat(' foi ').concat("Reprovado"))

}

/*
if (media >= 7) {
    console.log('O Aluno: '.concat(nome).concat(' foi ').concat("Aprovado"))
}

if (media >= 5 && media < 7) {
    console.log('O Aluno: '.concat(nome).concat(' está em ').concat("Recuperação"))
}

if (media < 5) {
    console.log('O Aluno: '.concat(nome).concat(' foi ').concat("Reprovado"))
}
*/


/*
if (media >= 7 ) {
    console.log('O Aluno: '.concat(nome).concat(' foi ').concat("Aprovado"))
} else if (media >= 5) {
    console.log('O Aluno: '.concat(nome).concat(' está em ').concat("Recuperação"))
} else {
    console.log('O Aluno: '.concat(nome).concat(' foi ').concat("Reprovado"))
}
*/