var salario = 4500

var deducao = 869.36
var IR = 27.5

if (salario <= 1903.98) {
    deducao = 0
    IR = 0
} else if (salario <=  2826.65) {
    deducao = 142.8
    IR = 7.5
}

// Executar o Cálculo --> Excel e fazer a dedução
// Imprimir o valor do imposto e o valor do Salário Líquido