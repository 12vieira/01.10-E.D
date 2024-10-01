// Classificação de Impacto Ambiental

const prompt = require('prompt-sync')();

const impact = parseFloat(prompt(`Digite o índice: `));

if  (impact <= 2){
    console.log(`Baixo`);
} else if (impact <= 4 ){
    console.log(`Moderado`)
} else{
    console.log(`Alto`)
}