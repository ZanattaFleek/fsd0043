const etanolKmPorLitro = 4.5
const gasolinaKmPorLitro = 7.0
const valorLitroEtanol = 3.99
const valorLitroGasolina = 5.29

const mediaEtanol = valorLitroEtanol / etanolKmPorLitro
const mediaGasolina = valorLitroGasolina / gasolinaKmPorLitro

console.log('Valor Km Rodado Etanol: ', mediaEtanol)
console.log('Valor Km Rodado Gasolina: ', mediaGasolina)

if (mediaGasolina === mediaEtanol) {

    console.log('Pode escolher, os custos são iguais')

} else if (mediaGasolina > mediaEtanol) {

    console.log('Melhor abastecer com Etanol')

} else {

    console.log('Melhor abastecer com Gasolina')
    
}