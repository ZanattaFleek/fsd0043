// Criar uma função que receba 3 notas, calcule a média e se:
// Média for maior ou igual que 7 --> Retorne "Aprovado"
// Média entre 5 e menor que 7 --> Recuperação
// Média menor que 5 --> Reprovado
// Chame esta função com 3 sequencia diferentes de notas

function notas(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3

    if (media >= 7) {
        return "Aprovado"
    } else if (media >= 5) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }

}

let aluno01 = notas(8, 5, 4)
let aluno02 = notas(7, 6, 3)
let aluno03 = notas(4.5, 7.5, 2)

console.log('Aluno01: ', aluno01)
console.log('Aluno02: ', aluno02)
console.log('Aluno03: ', aluno03)
