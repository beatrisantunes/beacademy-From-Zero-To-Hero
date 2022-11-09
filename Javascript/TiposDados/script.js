/*string*/
console.log('TESTE', 'TESTANDO')

/*numerais*/
console.log(12) //Integer
console.log(12.5) //float
console.log(12 * 24 / 4) //calc
console.log(Infinity) //INfinity
console.log(50 + (53 * 4.5)) //
console.log(Math.round(50 + (53 * 4.5))) //MAth

/*Boolean*/
console.log(50 < 23) //false
console.log(50 > 23) //true
console.log(50 == 50) //false

/*Undefined e null*/
console.log(null === undefined) //false

/*Objetos*/
console.log({
    marca: 'FIAT',
    largura: '550cm',
    peso: 1,
    velocidade: (90 * 200) * 2,
    andar: function () {
        console.log('Sua velocidade é de 200')
    },
    possuiAr:true
}); 

/*Array*/
console.log([
    "Biscoito",
    "Coca-Cola",
    "Verduras",
    "Carne"
])