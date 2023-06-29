var cadastroClientes = [
    {
        nome: 'Fleek',
        logradouro: 'Av. 21 de Abril, 504',
        cep: '35.500-010'
    },
    {
        nome: 'Victor',
        logradouro: 'Av. Anhanguera, 1462',
        cep: '35.502-297'
    },
    {
        nome: 'Ian',
        logradouro: 'Alameda das Rosas, 196',
        cep: '35.557-000'
    }
]

var statusForm = 'Incluindo'
var indiceAtualEdicao = -1

function btConfirmarExclusao() {
    const txtNome = document.getElementById('txtNome')
    const txtLogradouro = document.getElementById('txtLogradouro')
    const txtCep = document.getElementById('txtCep')

    const idBtCadastrar = document.getElementById('btCadastrar')
    const idBtConfirmarAlteracao = document.getElementById('btConfirmarAlteracao')
    const idBtConfirmarExclusao = document.getElementById('btConfirmarExclusao')

    idBtCadastrar.className = 'formularioButton'
    idBtConfirmarAlteracao.className = 'hidden'
    idBtConfirmarExclusao.className = 'hidden'

    txtNome.disabled = false
    txtLogradouro.disabled = false
    txtCep.disabled = false

    cadastroClientes.splice(indiceAtualEdicao, 1)

    txtNome.value = ''
    txtLogradouro.value = ''
    txtCep.value = ''

    statusForm = 'Incluindo'

    exibirTabelaClientes()

    txtNome.focus()

}

/**
 * Exibir o registro a ser excluido
 * Desabilita os campos de Texto
 * Esconde os botões e exibe o botão "Confirmar Exclusão"
 * Seta a variável indiceAtualEdicao com o índice a ser excluído
 * Desabilitar a tabela
  */
function btExcluir(indice) {
    const txtNome = document.getElementById('txtNome')
    const txtLogradouro = document.getElementById('txtLogradouro')
    const txtCep = document.getElementById('txtCep')

    const idBtCadastrar = document.getElementById('btCadastrar')
    const idBtConfirmarAlteracao = document.getElementById('btConfirmarAlteracao')
    const idBtConfirmarExclusao = document.getElementById('btConfirmarExclusao')

    idBtCadastrar.className = 'hidden'
    idBtConfirmarAlteracao.className = 'hidden'
    idBtConfirmarExclusao.className = 'formularioButton'

    txtNome.disabled = true
    txtLogradouro.disabled = true
    txtCep.disabled = true

    txtNome.value = cadastroClientes[indice].nome
    txtLogradouro.value = cadastroClientes[indice].logradouro
    txtCep.value = cadastroClientes[indice].cep

    indiceAtualEdicao = indice

    statusForm = 'Excluindo'

    exibirTabelaClientes()

}

function btAlterar(indice) {

    const txtNome = document.getElementById('txtNome')
    const txtLogradouro = document.getElementById('txtLogradouro')
    const txtCep = document.getElementById('txtCep')

    const idBtCadastrar = document.getElementById('btCadastrar')
    const idBtConfirmarAlteracao = document.getElementById('btConfirmarAlteracao')

    idBtCadastrar.className = 'hidden'
    idBtConfirmarAlteracao.className = 'formularioButton'

    txtNome.value = cadastroClientes[indice].nome
    txtLogradouro.value = cadastroClientes[indice].logradouro
    txtCep.value = cadastroClientes[indice].cep

    statusForm = 'Alterando'
    exibirTabelaClientes()

    indiceAtualEdicao = indice

}

function exibirTabelaClientes() {

    const tblDados = document.getElementById('tblDados')

    if (statusForm === 'Incluindo') {

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

            linhas = linhas.concat('<td>')

            let txtBotao = '<input class="formularioButton" type="button" value="Alterar" onclick="btAlterar('
            txtBotao = txtBotao.concat(indice.toString().trim())
            txtBotao = txtBotao.concat(')" />')

            // <input type="button" value="Alterar" onclick="btAlterar(0)" />

            linhas = linhas.concat(txtBotao)

            txtBotao = '<input class="formularioButton" type="button" value="Excluir" onclick="btExcluir('
            txtBotao = txtBotao.concat(indice.toString().trim())
            txtBotao = txtBotao.concat(')" />')

            linhas = linhas.concat(txtBotao)

            // Botão Excluir

            linhas = linhas.concat('</td>')

            linhas = linhas.concat('</tr>')

        }

        // let tabela = "<table class='tabela'><tr><th>Nome</th><th>Cep</th><th>Logradouro</th></tr>"

        let tabela = `
            <table class='tabela'>
            <tr>
                <th>Nome</th>
                <th>Cep</th>
                <th>Logradouro</th>
                <th>Ações</th>
            </tr>        
        `

        tabela = tabela.concat(linhas)

        tabela = tabela.concat('</table>')

        tblDados.innerHTML = tabela

    } else {
        tblDados.innerHTML = ''
    }

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

        if (statusForm === 'Incluindo') {
            cadastroClientes.push(novoCliente)
        } else if (statusForm === 'Alterando') {
            const idBtCadastrar = document.getElementById('btCadastrar')
            const idBtConfirmarAlteracao = document.getElementById('btConfirmarAlteracao')

            idBtCadastrar.className = 'formularioButton'
            idBtConfirmarAlteracao.className = 'hidden'

            cadastroClientes[indiceAtualEdicao] = novoCliente

        }

        txtNome.value = ''
        txtLogradouro.value = ''
        txtCep.value = ''

        statusForm = 'Incluindo'

        exibirTabelaClientes()

        txtNome.focus()

    }

}

window.addEventListener("DOMContentLoaded", (event) => {
    exibirTabelaClientes()
});