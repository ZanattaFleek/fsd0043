import { CadastroClienteInterface } from "./interfaces/Cliente.interfaces";

let rsCliente: CadastroClienteInterface = {
    idCliente: 1,
    ativo: true,
    email: 'programacao@fleekcursos.com.br',
    endereco: 'Av. 21 de Abril, 504',
    nome: 'Marcelo João Zanatta',
    bairro: 'Bom Pastor'
}

console.log(rsCliente.email)

rsCliente.email = 'zanatta@fleekcursos.com.br'

console.log(rsCliente.email)