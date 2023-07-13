export interface EnderecoInterface {
    logradouro: string
    cep: string
    bairro: string
    municipio: string
    uf: string
}

export interface CadastroClienteInterface {
    idCliente: number
    nome: string
    endereco: EnderecoInterface
    email: string
    limiteCredito?: number
    ativo: boolean
    telefones: Array<string>
}

