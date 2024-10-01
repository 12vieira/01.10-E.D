//  Verificação de Estágio de Plantas

const prompt = require('prompt-sync')();

const altura = parseInt(prompt(`Digite a altura da planta em cm: `));

if (altura <= 10 ){
    console.log(`Brotando`);
} else if(altura <= 30 ){
    console.log(`Crescendo`)
} else{
    console.log(`Adulto`)
}