// Hoisting

digaMinhaIdade()

function digaMinhaIdade() {
    return console.log(`Minha idade: ${22}`)
} // funciona assim

/* digaMinhaIdade();

const digaMinhaIdade = function () {
   return console.log(`Minha idade: ${22}`);
} */ //nao funciona na forma mais moderna de escrever

//Callback

function minhaFuncao(callback) {
    console.log('Inicio da Função')

    callback(15, 15)

    console.log("Fim da Função");
}

minhaFuncao(
    (num1, num2) => {
        return console.log(`Soma dos numeros: ${num1+num2}`)
    }
)

// Função Construtura
//INstanciar uma funcão

function Soma(n1, n2) {
    this.n1 = n1,
        this.n2 = n2,
        this.calc = function(n1, n2) {
            return (total = n1 + n2)
        }

}

//Acessando ou instanciando a função
const calcular = new Soma()
    //console.log(calcular)
console.log(calcular.calc(10, 20))

const n1 = calcular.n1 = 14
const n2 = calcular.n2 = 32

console.log(`N1: ${n1}`);
console.log(`N2: ${n2}`);

console.log(`Soma de: ${n1} + ${n2} = ${calcular.calc(n1, n2)}`);


const calcular2 = new Soma()

const numero1 = (calcular2.n1 = 12);
const numero2 = (calcular2.n2 = 42);
console.log(
    `Soma de: ${numero1} + ${numero2} = ${calcular2.calc(numero1, numero2)}`
);

//Outra forma de acessar, instaciar e ja passar os parametros

const calculo = new Soma().calc(12, 72)
console.log(`Soma dos valores: ${calculo}`)

// exemplo de funcao nativa javascript
// Date

const data = new Date()
console.log(`Data de hj: ${data}`)