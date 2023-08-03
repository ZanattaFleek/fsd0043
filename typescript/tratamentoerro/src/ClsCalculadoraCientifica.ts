import ClsCalculadora from "./ClsCalculadora";

// Herança

/**
 * Realiza operações matemáticas não convencionais
 */
export default class ClsCalculadoraCientifica extends ClsCalculadora {

    public potencia(expoente: number) {

        this.tmpResultado = this.tmpResultado ** expoente

    }

}