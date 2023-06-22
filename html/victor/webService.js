function buscarCep() {
    const txtCep = document.getElementById('txtCep')
    const txtEndereco = document.getElementById('txtEndereco')

    const url = 'https://viacep.com.br/ws/'.concat(txtCep.value).concat('/json/')

    fetch(url).then(resposta => {

        resposta.json().then(rsCEP => {

            txtEndereco.value = rsCEP.logradouro

            console.log(rsCEP.cep)
            console.log(rsCEP.logradouro)
            console.log(rsCEP.complemento)
            console.log(rsCEP.bairro)
            console.log(rsCEP.localidade)
            console.log(rsCEP.uf)
        })
    }).catch ( erro => {
        txtEndereco.value = 'Erro no CEP...'
    })
    /*
    fetch('https://viacep.com.br/ws/35500173/json/').then(felipe => {

    }).catch( erro => {

    })
    */
}