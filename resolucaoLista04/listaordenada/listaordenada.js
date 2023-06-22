var nomes = []

function incluirNomeNaLista() {

    let elTxtLista = document.getElementById('txtLista')

    let nome = document.getElementById('txtNome').value

    nomes.push(nome)

    // nomes.sort(ordemAlfabetica)

    nomes.sort( (primeiro,segundo) => {

        let retorno = 0

        primeiro = primeiro.toUpperCase()
        segundo = segundo.toUpperCase()

        if (primeiro > segundo) {
            retorno = 1
        } else if (primeiro < segundo) {
            retorno = -1
        }

        return retorno

    })

    let lista = ""

    for (let contador = 0; contador < nomes.length; contador++) {
        lista = lista.concat('<li>')
        lista = lista.concat(nomes[contador])
        lista = lista.concat('</li>')
    }

    elTxtLista.innerHTML = lista


}

