export default class ClsMedia {

    private numeros: Array<number> = []
    private media: number = 0

    public getMedia(): number {
        return this.media
    }

    public adicionarNumeroNoArray(valor: number) {

        this.numeros.push(valor)

        this.calcularMedia()

    }

    private calcularMedia() {

        let soma: number = 0

        this.numeros.forEach((valor) => {
            soma = soma + valor
        })

        /* Outras Soluções...
        
        for (let contador = 0; contador < this.numeros.length; contador++) {
            soma = soma + this.numeros[contador]
        }
        
        for (let valor of this.numeros) {
            soma = soma + valor
        }

        */

        this.media = soma / this.numeros.length

    }


}