import Dexie from 'dexie';

const NOME_DATABASE: string = 'InovacaoDB3'

export default class ClsSQLite {

    private db: Dexie = new Dexie(NOME_DATABASE)

    public constructor() {
        this.db.version(1).stores({
            clientes: '++id, nome, telefone',
            fornecedores: '++id, nome, telefone'
        })
    }

    public incluir(tabela: string, objeto: any): Promise<boolean> {

        return new Promise((resolve, _reject) => {

            if (this.db) {

                this.db.transaction('rw', 'clientes', 'fornecedores', () => {
                    this.db.table(tabela).add(JSON.parse(objeto))
                }).then(() => {
                    resolve(true)
                }).catch((e: any) => {
                    resolve(false)
                })
            } else {
                console.log('Sem o DB', this.db)
            }

        })
    }

    public consultar(tabela: string): Promise<Array<any>> {

        return this.db.table(tabela).toArray()

    }

    public fechar() {
        if (this.db) this.db.close()
    }

}