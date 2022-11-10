//Conversao de Dados
//String para Numero e numero para string

console.log('9' + 24)// concatenação de 9 e 24 ->924
console.log(Number('9') + 24)// transformou a string 9 em numeral e somou ao 24 -> 33
console.log(String(9) + " virou uma " +typeof String(9));// transformou a string 9 em numeral e somou ao 24 -> 33

// Contar caracteres

let palavra = "teste"
console.log(palavra.length);// length vê o tamanho da variavel
console.log(`${palavra} tem ${palavra.length} caracteres`)

//Maiuscula e minusculas
let frase = "frase para testar funcao"
console.log(frase.toLocaleUpperCase())// frase toda maiuscula
console.log(frase.toLocaleLowerCase())// frase toda minuscula

//convertendo para inteiro
let num = 32.5
console.log(parseInt(num));//32.5 vira 32

//convertendo para float
let num2 = 34
console.log(parseFloat(num2));// virou um float 34

//casas decimais
let num3 = 45.67987900
console.log(num3.toFixed())//arredondou para 46
console.log(num3.toFixed(2))//arredondou 2 casas decimais -> 45.68
console.log(num3.toFixed(4).replace('.',','))//arredondou 4 casas decimais e trocou o ponto por virgula -> 45,6799


//precisao numerica
let num4 = 129 / 45
console.log(num4)//2.8666666666666667

console.log(Number(num4.toPrecision(3)))//2.87


