// Hoisting

digaMinhaIdade()

function digaMinhaIdade() {
  return console.log(`Minha idade: ${36}`)
} // funciona assim

/* digaMinhaIdade();

const digaMinhaIdade = function () {
   return console.log(`Minha idade: ${36}`);
} */ //nao funciona na forma mais moderna de escrever

//Callback

function minhaFuncao(callback) {
  console.log('Inicio da Função')
  
  callback(10, 35)
  
  console.log("Fim da Função");
}
 
minhaFuncao(
  (num1, num2) => {
    return console.log(`Soma dos numeros: ${num1+num2}`)
  }
)

// Função Construtura
//INstanciar uma funcão

function Soma(n1,n2) {
  this.n1 = n1,
  this.n2 = n2,
  this.calc = function (n1, n2) {
    return (total = n1 + n2)
  } 
    
}

//Acessando ou instanciando a função
const calcular = new Soma()
//console.log(calcular)
console.log(calcular.calc(23, 45))

const n1 = calcular.n1 = 34
const n2 = calcular.n2 = 54

console.log(`N1: ${n1}`);
console.log(`N2: ${n2}`);

console.log(`Soma de: ${n1} + ${n2} = ${calcular.calc(n1, n2)}`);


const calcular2 = new Soma()

const numero1 = (calcular2.n1 = 4);
const numero2 = (calcular2.n2 = 49);
console.log(
  `Soma de: ${numero1} + ${numero2} = ${calcular2.calc(numero1, numero2)}`
);

//Outra forma de acessar, instaciar e ja passar os parametros

const calculo = new Soma().calc(9, 82)
console.log(`Soma dos valores: ${calculo}`)

// exemplo de funcao nativa javascript
// Date

const data = new Date()
console.log(`Data de hj: ${data}`)

