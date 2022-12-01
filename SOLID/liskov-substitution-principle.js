//Liskov Substitution Principle

class FlyingBirds {
    fly(){
        console.log(`Eu posso voar`)
    }
}

 class SwimmingBird {
    swim(){
        console.log(`Eu posso nadar`)
    }
}

class Penguin extends SwimmingBird {}

class Duck extends FlyingBirds {}


function makeFlyingBirdFly(bird){
    bird.fly()
}

function makeSwimmingBirdSwim(bird){
    bird.swim()
}

const pato = new Duck()
const pinguim = new Penguin()

makeFlyingBirdFly(pato)
makeSwimmingBirdSwim(pinguim)
