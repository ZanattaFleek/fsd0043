import Dexie from 'dexie';

const NOME_DATABASE: string = 'InovacaoDB3'

const NOMES: Array<string> = ['Andréa',
    'João',
    'Zanatta',
    'Augusto',
    'Vanessa',
    'Arthur',
    'Samuel',
    'Alberto',
    'Renata',
    'Brenda',
    'Marcela',
    'Fran',
    'Andrigo',
    'Amadeu',
    'Lacerda',
    'Campinas',
    'Oliveira',
    'Belo Horizonte',
    'Divinópolis',
    'Cajuru',
    'Formiga',
    'Lavras',
    'Gabriel',
    'Gabriela',
    'Miguel',
    'Jaqueline',
    'Fernando',
    'Nilton',
    'José',
    'Joaquim',
    'Frank',
    'Felipe']

export default class ClsSQLite {

    private db: Dexie = new Dexie(NOME_DATABASE)

    public constructor() {
        this.db.version(1).stores({
            clientes: '++id, nome, telefone',
        })
    }

    public incluirTeste(): Promise<number> {

        return new Promise((resolve, _reject) => {

            if (this.db) {

                this.db.transaction('rw', 'clientes', () => {

                    const REGISTROS: number = 500

                    NOMES.forEach(nome => {

                        for (let contador: number = 0; contador <= REGISTROS; contador++) {
                            this.db.table('clientes').add(
                                { nome: nome.concat(contador.toString()) }
                            )
                        }

                    })

                }).then(() => {
                    resolve(this.db.table('clientes').count())
                }).catch((e: any) => {
                    resolve(-1)
                })
            } else {
                console.log('Sem o DB', this.db)
            }

        })
    }

    public consultar(tabela: string, campo: string, pesquisa: string): Promise<Array<any>> {

        return this.db.table(tabela).where(campo).startsWith(pesquisa).toArray()

    }

    public fechar() {
        if (this.db) this.db.close()
    }

}