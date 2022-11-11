//For

/* for (let i = 1; i <= 10; i++) {
  console.log(i);
  
}
for (let i = 1; i <= 10; i++) {
  if (i === 5)
    continue;
  console.log(i);
} */

//While
let i = 1;
while (i <= 20) {
    console.log(i);

    i++;
}

//For Of
//Array
let numero = ["Beatris",
    "Carlos",
    "Sandro",
    "Paulo",
    "Juliana"
];

for (num of numero) {
    console.log(num);
}

//For In

let animais = {
    nome: "Pinguim",
    altura: 0.8,
    ano: 2,
};
for (item in animais) {
    //Pegar valores de objetos em um For in
    console.log(animais["altura"]);
    //Pegar todo objeto
    console.log(animais);
    //Pega os valores dentro das propriedades
    console.log(animais[item]);
    //Pega valores individuais das propriedades de um objeto
    console.log(animais.nome);
}
let arrayNome = ["Beatris",
    "Carlos",
    "Sandro",
    "Paulo",
    "Juliana"
];
for (item in arrayNome) {
    console.log(arrayNome); // Mostra todo Array
    console.log(arrayNome[item]); //Mostra todos os valores
    console.log(arrayNome[2]); // Mostrar diretamente um vetor
}
console.log(item);