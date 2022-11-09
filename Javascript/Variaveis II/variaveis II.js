//Objetos


const humano = {
    nome: 'Beatris Antunes Silva',
    idade: 36,
    peso: 100,
    ehAtleta: false,
    andar: function andando() {
        console.log('Eu continuo a andar')
    }
}
console.log(humano)
console.log(humano.nome)
console.log(humano.idade)
console.log(humano.andar())

//Concatenar 
console.log("O humano " + humano.nome + " tem a idade de " + humano.idade + " anos")

//Interpolar
console.log(`O humano ${humano.nome} tem a idade de ${humano.idade} anos`)

//Arrays
const animais = [
    'baleia',
    'tigre',
    'morcego',
    'papagaio',
    {
        nome: 'Teco',
        idade: 2,
        peso: 0.3
    }
]
console.log(animais)
console.log(animais.length) //tamanho do array
console.log(animais[2]) //posicao 2
console.log(animais[4]) //posicao 4
console.log(animais[4].nome) //posicao 4

console.log(
    `O animal ${animais[3]} tem o nome ${animais[4].nome} tem o peso de ${animais[4].peso} kg`
);