//Open/Closed Principle
//Se mudar alguma coisa fora, não precisa ter de mudar dentro.

class Tax1 {
    constructor (product,price){

        this.product = product
        this.price = price
    }

    totalPrice(tax) {
        console.log(`O valor total é de ${this.price + tax},00`)
    }
}

class Tax2 {

    constructor(product, price){
        this.product = product
        this.price = price
    }

    totalPrice(tax) {
        console.log(`O valor total é de ${this.price + tax},00`)
    }

}

class Tax3 {

    constructor(product, price){
        this.product = product
        this.price = price
    }

    totalPrice(tax) {
        console.log(`O valor total é de ${this.price + tax},00`)
    }

}

const taxes = [
    new Tax1('Snes',10),
    new Tax2('xbox',20),
    new Tax3('PlayStation',30)
]

function calculate(taxes){
    taxes.forEach(tax => console.log(tax.totalPrice(5)));
}

calculate(taxes)