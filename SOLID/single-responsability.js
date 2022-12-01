class weightAdviser {
    
    constructor(user,weight){
    this.user = user,
    this.weight = weight
    }

    adviser (expectedWeight){
        
        if (this.weight >= expectedWeight){
            weightAlert(this.user)
        }
    }
}

/* A função encontra-se fora da classe propositalmente, de modo que a classe possua uma única responsabilidade.No caso cadastrar o Usuário. */

function weightAlert (user){
    console.log(`${user} está acima do peso`)
}

const Marcelo = new weightAdviser ('Marcelo',90)

Marcelo.adviser(89)
