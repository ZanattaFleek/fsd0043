var tabuada = 1;
var multiplicador;

while (tabuada <= 10) {
    multiplicador = 1
    console.log("Tabuada do Número: ", tabuada)
    while (multiplicador <= 10) {
        console.log(multiplicador, 'x', tabuada, '=', multiplicador * tabuada)
        multiplicador = multiplicador + 1
    }
    tabuada = tabuada + 1
    console.log("====================================")
}
