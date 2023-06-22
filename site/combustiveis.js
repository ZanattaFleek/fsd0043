function btCalcularCustos() {
    const valorEtanol = parseFloat(document.getElementById('txtValorEtanol').value)
    const valorGasolina = parseFloat(document.getElementById('txtValorGasolina').value)
    const KmGasolina = parseFloat(document.getElementById('txtKmGasolina').value)
    const KmEtanol = parseFloat(document.getElementById('txtKmEtanol').value)

    const valorKmRodadoGasolina = valorGasolina / KmGasolina
    const valorKmRodadoEtanol = valorEtanol / KmEtanol

    console.log('valorEtanol', valorEtanol)
    console.log('valorGasolina', valorGasolina)
    console.log('KmGasolina', KmGasolina)
    console.clear()
    console.log('KmEtanol', KmEtanol)
    console.log('valorKmRodadoGasolina', valorKmRodadoGasolina)
    console.log('valorKmRodadoEtanol', valorKmRodadoEtanol)

    console.table(['valorEtanol', 'valorGasolina'], [valorEtanol, valorGasolina])

    document.getElementById('txtValorKmRodadoGasolina').value = valorKmRodadoGasolina
    document.getElementById('txtValorKmRodadoEtanol').value = valorKmRodadoEtanol

    let resposta

    if (valorKmRodadoEtanol < valorKmRodadoGasolina) {
        resposta = 'Melhor Abastecer com Etanol'
    } else {
        resposta = 'Melhor abastecer com Gasolina'
    }

    // console.log(document.getElementById('txtResposta').innerHTML)

    document.getElementById('txtResposta').innerHTML = resposta

}