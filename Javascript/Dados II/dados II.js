//Manipulando String e Array
/* Separando um texto que contem espaços, em um novo array onde
cada texto é uma posição do array */

let novaFrase = 'Essa é uma frase para teste de array'

console.log(`Frase: ${novaFrase}`)

let fraseParaArray = novaFrase.split(' ')
console.log(fraseParaArray)

//convertendo novamente texto para string
//.join -> permite que gere separações

let fraseModificada = fraseParaArray.join(" ").toUpperCase()
console.log(fraseModificada)

//Verificar se contem palavras ou letras
// usando includes

console.log(novaFrase.includes("frase"))//true

//objetos

let arrayFrase = ["Essa",
    "é",
    "uma",
    "frase",
    "para",
    "teste",
    "de",
    "array"];
console.log(novaFrase.includes("teste"));

//string startWith
console.log(novaFrase.startsWith("um"));//false
console.log(novaFrase.startsWith("Es"));//true


//string endWith

console.log(novaFrase.endsWith("ay"));//true
console.log(novaFrase.endsWith("Es"));//false

//transforma array em caractere

console.log(Array.from(novaFrase))
console.log(Array.from(novaFrase).length)





