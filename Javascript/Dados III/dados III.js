//Manipulando arrays

const animais = ["galinha", "baleia", "onça", "pato"]

console.log("Animais antes: ",animais)
//Adicionar item no fim do array
console.log(animais.push("formiga"))
console.log("Animais push: ", animais);

//adicionar item ao começo
console.log(animais.unshift("galo"));
console.log("Animais unshift: ", animais);


//remover item do final
console.log(animais.pop());
console.log("Animais pop: ", animais);

//remover item do inicio
console.log(animais.shift());
console.log("Animais pop: ", animais); 

//pegar apenas alguns elementos
//nao modificar o array usando slice
console.log(animais.slice(0, 2));

//remover 1 ou mais itens do array usando splice
//console.log(animais.splice(1,3));

//encontrar pela posicao do array usando indexOf
let inde = animais.indexOf("baleia")
console.log(inde)
animais.splice(inde, 2)
console.log(animais);
