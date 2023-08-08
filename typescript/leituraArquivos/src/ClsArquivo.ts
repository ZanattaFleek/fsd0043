import fs from 'fs'

export default class ClsArquivo {

    public tmpConteudo: string = ''

    public get conteudo(): string {
        return this.tmpConteudo
    }

    public lerArquivo(caminho: string): Promise<void> {

        return new Promise((resolve, reject) => {

            fs.readFile(caminho, {
                encoding: 'utf-8'
            }, (err, dadosDoArquivo) => {

                if (err && err.code) {
                    console.log('Houve Erro na Leitura do Arquivo: ', err.message)
                    reject()
                    console.log('Após o reject....')
                } else {

                    this.tmpConteudo = dadosDoArquivo
                    resolve()
                    console.log('Após o resolve.......')
                }

            })


        })

    }



}