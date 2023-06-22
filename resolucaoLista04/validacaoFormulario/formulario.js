function validarCampos() {

    const txtNome = document.getElementById('txtNome').value

    if (txtNome.length === 0) {
        document.getElementById('erroNome').innerHTML = 'Forneça um Nome...'
    } else {
        document.getElementById('erroNome').innerHTML = ''
    }

}

function btCadastrar() {
    validarCampos()
}
