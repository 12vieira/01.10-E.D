// Verificação de Clima

const prompt = require('prompt-sync')();

const ind = parseInt(prompt(`Digite o índice do clima: `));

if  (ind < 30 ){
    console.log(`Seco`);
} else if (ind < 70 ){
    console.log(`Úmido`)
} else{
    console.log(`Chuvoso`)
}