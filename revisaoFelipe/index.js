const escolaridades = ['Fundamental 1', 'Fundamental 2', 'Ensino Médio', 'Ensino Superior']
const empresas = ['Fleek Cursos', 'Fleek Cursos Divinópolis', 'Escola Fleek Cursos', 'A Escola do Felipe...']
var indiceAtual = 0

function alteraClasse(nomeCampo, novaClasse) {
    const spanNomeEmpresa = document.getElementById(nomeCampo)

    spanNomeEmpresa.className = novaClasse
    spanNomeEmpresa.style = 'display: inline;'

}

function alterarConteudo() {
    const spanNomeEmpresa = document.getElementById('nomeEmpresa')

    indiceAtual++

    if (indiceAtual > 3) {
        indiceAtual = 0
    }

    spanNomeEmpresa.innerHTML = empresas[indiceAtual]

}

function alteraEscolaridade() {
    const txtEscolaridade = document.getElementById('txtEscolaridade')
    const lblEscolaridade = document.getElementById('lblEscolaridade')

    lblEscolaridade.innerHTML = escolaridades[txtEscolaridade.value - 1]

}