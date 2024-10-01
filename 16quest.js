// Classificação de Nível de Estresse

const prompt = require('prompt-sync')();

const stress = parseInt(prompt(`Digite o nível de estresse: `));

if  (stress <= 3 ){
    console.log(`Baixo`);
} else if (stress <= 7 ){
    console.log(`Moderado`)
} else{
    console.log(`Alto`)
}