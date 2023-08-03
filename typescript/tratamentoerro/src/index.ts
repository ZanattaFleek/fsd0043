import ClsCalculadora from "./ClsCalculadora";

let calcIan = new ClsCalculadora(5)
let contador: number = 0

try {

    contador++
    calcIan.somar(0)
    contador++

} catch {

    contador++

} finally {

    contador++

}

console.log('Resultado de Contador:', contador)