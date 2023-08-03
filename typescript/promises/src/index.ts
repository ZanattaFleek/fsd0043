import ClsCalculadora from "./ClsCalculadora";
import axios from 'axios';

let calcIan = new ClsCalculadora(5)

// Exibe a "bolinha.... na tela do usuário"

axios.get('https://viacep.com.br/ws/35500010/json').then(resposta => {
    console.log('Resposta do CEP: ', resposta.data)
    console.log('Resposta status: ', resposta.status)
    console.log('Resposta statusText: ', resposta.statusText)
})

calcIan.dividir(1).then(rsDividir => {
    // Retira a Bolinha da tela do usuário...

    console.log('Resultado do Calculo:', calcIan.resultado)
    console.log('Resultado do rsDividir:', rsDividir)

}).catch(e => {

    console.log('Não foi possível dividir...', e)

}).finally(() => {

    console.log('Terminei o programa....')

})

console.log('Fora do Promise....')
