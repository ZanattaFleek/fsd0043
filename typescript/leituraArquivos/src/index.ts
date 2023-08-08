import ClsArquivo from "./ClsArquivo";

let clsLeitura: ClsArquivo = new ClsArquivo()

clsLeitura.lerArquivo('c:\\backups\\f2elipe.txt').then(() => {
    console.log('Consegui Ler....')
    console.log(clsLeitura.conteudo)
}).catch(() => {
    console.log('Não Consegui Ler....')
})