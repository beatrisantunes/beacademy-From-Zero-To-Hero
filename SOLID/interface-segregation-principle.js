class ProductsEntity {
    constructor(name,dept){
        this.name = name,
        this.dept = dept
    }
}

class TechProducts extends ProductsEntity {
    constructor(name,dept){
        super(name,dept)
    }
}

class FoodProducts extends ProductsEntity {
    constructor(name, dept,valiDate){
        super(name,dept)
        this.valiDate = valiDate
    }
}

const xbox = new TechProducts('xBox','Tecnologia')
const pipoca = new FoodProducts('Pipoca','Alimenticios','Nov/2023')

console.log(xbox)
console.log(pipoca)
