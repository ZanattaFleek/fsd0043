function calcular(){
    let A = document.getElementById('inp-A').value
    let B = document.getElementById('inp-B').value
    let C = document.getElementById('inp-C').value
parseInt(A, B, C)
    if(A == 0){
    document.getElementById('X1').value = 'Não Existem Raízes Reais'
    document.getElementById('X2').value = 'Não Existem Raízes Reais'
    }
    else{
        var delta = B**2 -(4*A*C)
        var x1 = (-(B) + Math.sqrt(delta)) / 2*A
        var x2 = (-(B) - Math.sqrt(delta)) / 2*A
        if(X1 == NaN){
            document.getElementById('X1').value = 'Não Existem Raízes Reais'
            document.getElementById('X2').value = 'Não Existem Raízes Reais'
        }
        else{
        document.getElementById('X1').value = x1
        document.getElementById('X2').value = x2
        }
    }
}