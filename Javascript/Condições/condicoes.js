//IF and ELSE
//Se e Senão

//< > == === != !==
/* let num = 10 
if(num > 5){
    console.log('Maior que 5')
}else{
    console.log('Menor que 5')
}

//&& || !
let num3 = 10 
let num4 = 20
if(num3 <= 10 && num4 <= 10){
    console.log('Menor')
}else if(num3 >= 10 || num4 >= 20){
    console.log('Maior')
}else{
    console.log("Falso")
}
 */
//Calculadora

function calc(num1, op, num2) {
    let resultado
    switch (op) {
        case "+":
            resultado = num1 + num2
            break;
        case "-":
            resultado = num1 - num2
            break;
        case "*":
            resultado = num1 * num2
            break;
        case "/":
            resultado = num1 / num2
            break;
        default:
            console.log('Operador inválido!')
            break;
    }
    return resultado
}
console.log(calc(10, '*', 65));

//Throw and Try Catch
function minhaIdade(minhaIdade) {
    if (!minhaIdade) {
        throw "Digite a idade!";
    }
    console.log("Executando depois do erro!");
}
try {
    minhaIdade(22);
    console.log("Erro tratado")
} catch (error) {
    console.log(error)
}
console.log("Programa continua")