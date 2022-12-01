// Dependency Inversion Principle

/* Basicamente, deve-se escrever códigos utilizando-se de abstrações que não dependam de tecnologias externas, pois caso a mesma precise ser trocada, não seja necessário refatorar os códigos da regra de negócio.
 */

class Store {
    constructor(brand) {
        this.paymentProcess = new PaymentProcess(brand)
    }
}

class PaymentProcess {
    constructor (brand) {
        this.brand = brand
    }
    
    payment() {
        console.log(`Pagou com ${this.brand}`)
    }
}

const bike = new Store(new PaymentProcess('Visa').payment())