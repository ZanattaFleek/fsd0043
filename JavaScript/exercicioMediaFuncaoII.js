// Criar uma função que receba 3 notas, calcule a média e se:
// Média for maior ou igual que 7 --> Retorne "Aprovado"
// Média entre 5 e menor que 7 --> Recuperação
// Média menor que 5 --> Reprovado
// Chame esta função com 3 sequencia diferentes de notas

function notas(nome, n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3

    if (media >= 7) {
        console.log('O Aluno: '.concat(nome).concat(' foi ').concat("Aprovado"))
    } else if (media >= 5) {
        console.log('O Aluno: '.concat(nome).concat(' está em ').concat("Recuperação"))
    } else {
        console.log('O Aluno: '.concat(nome).concat(' foi ').concat("Reprovado"))
    }

}

notas('Frank', 8, 5, 4)
notas('Felipe', 7, 6, 3)
notas('Stella', 4.5, 7.5, 2)
