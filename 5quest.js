// Classificação de Distância de Corrida

const prompt = require('prompt-sync')();

const dist = parseInt(prompt(`Digite a distância percorrida em km: `));

if (dist <= 5 ){
    console.log(`Curta`);
} else if(dist <= 10 ){
    console.log(`Média`)
} else{
    console.log(`Longa`)
}