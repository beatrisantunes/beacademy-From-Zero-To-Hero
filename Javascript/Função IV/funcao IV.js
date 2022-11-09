// Escopo e Hoisting em uma função

//Parte 1
/* let assunto
function criarAssunto(assunto) {
    return assunto
} 
console.log(criarAssunto(assunto)) */ //undefined

//Parte 2
/* let assunto = 'Programação';
function criarAssunto(assunto) {
  return assunto;
}

console.log(`Assunto global: ${assunto}`);//"Programação"
console.log(`Assunto da Função: ${criarAssunto(assunto)}`); *///"Programação"

//PArte 3

/* let assunto = "Programação";
function criarAssunto(assunto) {
    assunto = 'Escutar Musica'
  return assunto;
}

console.log(`Assunto global: ${assunto}`);//"Programação"
console.log(`Assunto da Função: ${criarAssunto(assunto)}`);//"Escutar Musica" */

//Parte 4
let assunto = "Programação";
function criarAssunto() {
  assunto = "Escutar Musica";
  return assunto;
}

console.log(`Assunto global: ${assunto}`);//"Programação"
console.log(`Assunto da Função: ${criarAssunto(assunto)}`);//"Escutar Musica"
