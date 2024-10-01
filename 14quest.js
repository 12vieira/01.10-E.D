// Classificação de Velocidade de Carro

const prompt = require('prompt-sync')();

const speed = parseFloat(prompt(`Digite a velocidade em km/h: `));

if  (speed <= 80 ){
    console.log(`Dentro do limite`);
} else{
    console.log(`Acima do limite`)
}