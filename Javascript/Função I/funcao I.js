// ex1

//corpo da funcao ou Metodo
function primeiraFuncao() {
    console.log('Olha a função!')
}
//executando a funcao
primeiraFuncao()

// parametros de uma funcao
function somar(num1,num2) {
    console.log(`Soma: ${num1+num2}`)
}
somar(32, 24)

// função com retorno// usando return
function funcaoComRetorno(n1,n2) {
    let calc = n1 + n2
    return calc
}
console.log(`Soma: ${funcaoComRetorno(20,12)}`)