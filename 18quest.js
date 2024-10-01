// Verificação de Temperatura Corporal

const prompt = require('prompt-sync')();

const temp = parseFloat(prompt(`Digite a temperatura: `));

if  (temp < 35.0){
    console.log(`Hipotermia`);
} else if (temp <= 37.5 ){
    console.log(`Normal`)
} else{
    console.log(`Febre`)
}