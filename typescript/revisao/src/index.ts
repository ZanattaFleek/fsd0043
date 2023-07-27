import ClsCalculadora from "./ClsCalculadora";
import ClsCalculadoraCientifica from "./ClsCalculadoraCientifica";

let calcVictor = new ClsCalculadora(100)
let calcStella = new ClsCalculadora()
let calcFelipe = new ClsCalculadoraCientifica()

calcVictor.somar(5)
calcVictor.somar(5)

calcFelipe.somar(10)
calcFelipe.somar(25)
calcFelipe.potencia(2)

calcStella.somar(30)
calcStella.subtrair(7)

console.log('Resultado de Victor: ', calcVictor.resultado)
console.log('Resultado de Stella: ', calcStella.resultado)
console.log('Resultado de Felipe: ', calcFelipe.resultado)
