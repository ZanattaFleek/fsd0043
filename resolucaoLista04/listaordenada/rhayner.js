const nomes = [
    'victor',
    'Amora',
    'Amanda',
    'amora',
    'Zanatta',
    'Fleek',
    'Frank',
    'Kaly',
    'rhayner'
]

nomes.sort(

    (arg1, arg2) => {

        console.log('Dentro da arrow function de comparação')

        if (arg1.length > arg2.length) {
            return 1
        } else if (arg1.length < arg2.length) {
            return -1
        } else {
            return 0
        }

    }

)

console.log(nomes)