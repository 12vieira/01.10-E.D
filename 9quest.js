// Classificação de Carga de Trabalho

const prompt = require('prompt-sync')();

const trabalho = parseInt(prompt(`Digite a carga de trabalho em horas: `));

if (trabalho <= 20 ){
    console.log(`Leve`);
} else if(trabalho <= 40 ){
    console.log(`Moderada`)
} else{
    console.log(`Intensa`)
}