// Restaurante
function pratoDeComida(alimento1,alimento2,alimento3,alimento4) {
    return `Meu almoço hoje foi: ${alimento1}, ${alimento2}, ${alimento3}, ${alimento4}.`
}

const prato = pratoDeComida('arroz', 'feijão', 'bife', 'batata-frita')
console.log(prato)

//Arrow Function

const primeiraArrowFunction = (num1,num2) => {
    let total = num1 - num2
    return total;
}
const resultado = primeiraArrowFunction(10, 3)
console.log(`Resultado: ${resultado}`)