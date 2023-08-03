/**
 * Realiza operações aritméticas básicas
 */
export default class ClsCalculadora {

    protected tmpResultado: number = 0

    /**
     * Valor Inicial da Calculadora - que será usado como Resultado
     * @param valorInicial Valor a ser atribuído como resultado inicial
     */
    constructor(valorInicial?: number) {
        if (valorInicial) {
            this.tmpResultado = valorInicial
        }
    }

    public get resultado(): number {
        return this.tmpResultado
    }

    /**
     * Acrescenta um número fornecido ao resultado
     * @param numero Número que será somado ao resultado
     */
    public somar(numero: number): void {
        // this.resultado = this.resultado + numero
        this.tmpResultado += numero
    }

    public dividir(numero: number): Promise<boolean> {

        return new Promise((resolve, reject) => {

            if (numero !== 0) {
                this.tmpResultado = this.tmpResultado / numero
                resolve(true)
            } else {
                reject(false)
            }

        })
    }

    public multiplicar(numero: number): void {
        this.tmpResultado = this.tmpResultado * numero
    }

    public subtrair(numero: number): void {
        this.tmpResultado = this.tmpResultado - numero
    }

}