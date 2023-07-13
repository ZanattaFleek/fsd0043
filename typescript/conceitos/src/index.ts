import { CadastroClienteInterface } from "./interfaces/cliente.interfaces"
import { ClsUtils } from "./utils/ClsUtils"


let rsClientes: Array<CadastroClienteInterface> = []

rsClientes.push({
   idCliente: 1,
   ativo: true,
   email: 'programacao@fleekcursos.com.br',
   endereco: {
      bairro: 'Centro',
      cep: '35.500-010',
      logradouro: 'Av. 21 de Abril',
      municipio: 'Divinópolis',
      uf: 'MG'
   },
   nome: 'Marcelo João Zanatta',
   telefones: []
})

let rsCliente: CadastroClienteInterface = {
   idCliente: 1,
   ativo: true,
   email: 'programacao@fleekcursos.com.br',
   endereco: {
      bairro: 'Centro',
      cep: '35.500-010',
      logradouro: 'Av. 21 de Abril',
      municipio: 'Divinópolis',
      uf: 'MG'
   },
   nome: 'Marcelo João Zanatta',
   telefones: []
}

let clsUtils: ClsUtils = new ClsUtils()

clsUtils.eVazio(rsCliente.email)

/*
console.log(rsCliente.email)

rsCliente.email = 'zanatta@fleekcursos.com.br'

console.log(rsCliente.email)

console.log(eVazio(rsCliente.email))
*/