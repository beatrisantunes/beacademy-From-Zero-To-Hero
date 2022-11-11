//Operadores logicos
// incremento e decremento

let numInc = 15
console.log(numInc);

//+1 incremento
numInc++;
console.log(numInc);//16

//-1 decremento
let numDec = 54;
console.log(numDec);

numDec--;
console.log(numDec);//53

numDec--;
console.log(numDec);//52

//operadores aritmeticos

let nota1 = 10
let nota2 = 5
let nota3 = 7.5
let nota4 = 3

let media = (nota1 + nota2 + nota3 + nota4)/4
console.log(Number(Math.floor(media)))

//Operadores relacionais
let numRel1 = 10;
let numRel2 = 43;

//Diferente no valor
let rel = numRel1 != numRel2; 
//Diferente no valor ou no tipo
rel = numRel1 !== numRel2;
//Igual no valor
rel = numRel1 == numRel2;
//Igual no valor e no tipo
rel = numRel1 === numRel2;
console.log(rel);

//Operador de atribuição

let novoNum = 30
novoNum += 20;
novoNum *= 4;
novoNum -= 60;
novoNum /= 2;
novoNum %= 3;

console.log(novoNum);

//Operadores condicionais(Ternário)
//(condition) ? true : false

let val = 14
let val2 = 20

const novaCond = val >= val2 ? "Isso é verdade"
  : val <= val2 ? "Isso é verdade, segunda resposta true"
    : "Resposta falsa para tudo!"
console.log(novaCond)
