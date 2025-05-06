function soma(num1, num2){
    return num1 + num2
}

function subtrair(num1, num2){
    return num1 - num2
}

function multiplicar(num1, num2){
    return num1 * num2
}

function dividir(num1, num2){
    return num1 / num2
}

let parametro1 = parseFloat(prompt("insira o primeiro valor a ser calculado:"))
let parametro2 = parseFloat(prompt("insira o segundo numero a ser calculado:"))
let operacao = prompt("Escolha a operação: digite 1 para soma , digite 2 para subtração, digite 3 para multiplicação, e digite 4 para divisão")

if(operacao === "1"){
    alert(soma(parametro1, parametro2))
}else if(operacao === "2"){
    alert(subtrair(parametro1, parametro2))
}else if(operacao === "3"){
    alert(multiplicar(parametro1, parametro2))
}else if(operacao === "4"){
    alert(dividir(parametro1, parametro2))
}else{
    alert("Numero não informado corretamente!")
}