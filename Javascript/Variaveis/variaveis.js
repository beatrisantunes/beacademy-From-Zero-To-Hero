// Declarar

var name = 'João'
let name2 = ' de José '
const name3 = 'Maria'
console.log('variaveis')
console.log(name , name2 , name3)

//Global e Hoisting
 
console.log('variavel name4 existe aqui?', name4);
{
    var name4 = "John";
}
console.log('variavel name4 existe aqui?', name4)

//Local e Escopo

//let teste = 'Testando'
let teste 
console.log("Estou testando aqui?", teste);//'Testando'
{
    teste = 'testou'
    console.log('Estou testando aqui?',teste)//testou
}
console.log("Estou testando aqui?", teste);//testou