// for(inicializador; condição-saída; expressão-final){

// }

// exercicio

let notas = [2,5,10,20,50,100,2,5,10,20,50,1002,5,10,20,50,1002,5,10,20,50,1002,5,10,20,50,100]
let total = 0

for(let repeticoes = 0; repeticoes < notas.length; repeticoes++){
    total +=  notas[repeticoes]
}

console.log(`O total do seu dinheiro é ${total}`)