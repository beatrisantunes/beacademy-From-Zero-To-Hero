//1. Declare uma varivel de nome person

var person

//2. Que tipo de dado é a variavel acima?
//Enquanto não for dado um valor a ela é do tipo Undefined

console.log(typeof person) // Undefined

/*3. Declare uma variavel e atribua valores para cada um dos dados:
 * nome: string
 * idade: Number(integer)
 *  peso: Number(float)
 *  ehAdmin: Boolean
 *  ehUmHomem: Boolean
 */

let pessoa = {
    nome: "Beatris Antunes Silva",
    idade: 22,
    peso: 70,
    ehAdmin: true,
    ehUmHomem: true
};

/*4. A variavel humano é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3

    4.2 Mostre no console a seguinte mensagem:
    O humano <nome> tem o peso <peso> kg
*/
//4.1
let humano = {
    nome: "Beatris Antunes Silva",
    idade: 22,
    peso: 70,
    ehAdmin: true,
    ehUmHomem: true,
};
console.log(humano) //4. Tipo Object
console.log(`O humano ${humano.nome} tem o peso de ${humano.peso} kg`)

/*5 Declare uma varivel do tipo array, de nome humans e atribua a ele
nenhum valor, ou seja, somente o array vazio.
*/
//let humans = []

/*6. Reatribua valor para a variavel acima, colocando dentro dela o objeto
humano da questao 4. (Não copiar e colocar o objeto, mas usar o objeto criado
    inserir ele no Array)  */

let humans = [
    humano
]

console.log(humans)
console.log(humans[0].idade) //36

/*7. Coloque no console o valor da posicao zero do Array acima */

console.log(humans[0]) //{nome: 'Bruno Travassos', idade: 36, peso: 100, ehAdmin: true, ehUmHomem: true}

/*8. Crie um novo objeto humano e coloque na posicao 1 do Array Humans */
let newhumano = {
    nome: "Joao Jose",
    idade: 50,
    peso: 95,
    ehAdmin: false,
    ehUmHomem: true,
};

humans = [
    humano,
    newhumano
]
console.log(humans[1]) //{nome: 'Joao Jose', idade: 50, peso: 95, ehAdmin: false, ehUmHomem: true}

/*9 Sem rodar codigo responda o resultado da saida abaixo

a) console.log(a)
var a =1
//resposta?? //Undefined

b)let b
console.log(b) undefined
{
    let b =2
    console.log(b) 2
}
console.log(b) undefined

c)console.log(c) erro nao definida
{
    let c =3
    console.log(c) 
}
console.log(c) 

d)const d = 10;
{
  console.log(d);
  const d = 20; erro de referencia, ja foi definida anteriormente
  console.log(d);
}
*/