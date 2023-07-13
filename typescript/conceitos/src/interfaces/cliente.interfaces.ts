export interface CadastroClienteInterface {
    idCliente: number
    nome: string
    endereco: string
    email: string
    limiteCredito?: number
    ativo: boolean
    bairro: string
}