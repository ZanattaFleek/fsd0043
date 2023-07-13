"use strict";
let numeros = {
    n1: 10,
    n2: 20
};
function somar(conjuntoNumeros) {
    conjuntoNumeros.n1 = 50;
    numeros.n2 = 50;
    return conjuntoNumeros.n1 + conjuntoNumeros.n2;
}
console.log(somar(Object.assign(Object.assign({}, numeros), { n2: 140 })));
console.log('Valor do Número1: ', numeros.n1);
console.log('Valor do Número2: ', numeros.n2);
// Zanatta: 190     10      50
// Frank:   190      10      140
// Pedro:   70      10      50
// Victor:  70      10      50
// Felps:   70      10      50
// Kally:   70      10      50
// Webert:  70      10      50
// Heloysa: 70      10      50
/*


nodemon --ignore mediaserver/** --exec ts-node src/index.ts


        "start": "nodemon --ignore mediaserver/** --exec ts-node src/index.ts",
        "teste": "nodemon --exec ts-node src/testes_apagar/teste.ts",

        */ 
