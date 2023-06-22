var cadastroClientes = []

function exibirTabelaClientes() {

    const tblDados = document.getElementById('tblDados')

    let linhas = ''

    for (let indice = 0; indice < cadastroClientes.length; indice++) {

        linhas = linhas.concat('<tr>')

        linhas = linhas.concat('<td>')
        linhas = linhas.concat(cadastroClientes[indice].nome)
        linhas = linhas.concat('</td>')

        linhas = linhas.concat('<td>')
        linhas = linhas.concat(cadastroClientes[indice].cep)
        linhas = linhas.concat('</td>')

        linhas = linhas.concat('<td>')
        linhas = linhas.concat(cadastroClientes[indice].logradouro)
        linhas = linhas.concat('</td>')

        linhas = linhas.concat('</tr>')

    }
    
    let tabela = "<table class='tabela'><tr><th>Nome</th><th>Cep</th><th>Logradouro</th></tr>"
    
    tabela = tabela.concat(linhas)
    
    tabela = tabela.concat('</table>')
    
    tblDados.innerHTML = tabela

}

function testarVazio(nomeCampo, mensagemErro, erroAnterior) {

    let estaVazio = false

    const campo = document.getElementById(nomeCampo)
    const campoMensagem = document.getElementById('erro'.concat(nomeCampo))

    if (campo.value.length === 0) {
        campoMensagem.innerHTML = mensagemErro

        if (!erroAnterior) campo.focus()

        estaVazio = true
    } else {
        campoMensagem.innerHTML = ''
    }

    return estaVazio || erroAnterior

}

function btCadastrar() {

    const txtNome = document.getElementById('txtNome')
    const txtLogradouro = document.getElementById('txtLogradouro')
    const txtCep = document.getElementById('txtCep')

    const novoCliente = {
        nome: txtNome.value,
        logradouro: txtLogradouro.value,
        cep: txtCep.value
    }

    let temErro = false

    temErro = testarVazio('txtNome', 'Nome deve ser Preenchido', temErro)
    temErro = testarVazio('txtCep', 'Cep deve ser Preenchido', temErro)
    temErro = testarVazio('txtLogradouro', 'Logradouro deve ser Preenchido', temErro)

    if (!temErro) {

        cadastroClientes.push(novoCliente)

        txtNome.value = ''
        txtLogradouro.value = ''
        txtCep.value = ''

        exibirTabelaClientes()

        txtNome.focus()

    }




}