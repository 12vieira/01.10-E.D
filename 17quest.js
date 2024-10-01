// Classificação de Idade para Atividades

const prompt = require('prompt-sync')();

const idade = parseInt(prompt(`Digite a idade: `));

if  (idade < 18 ){
    console.log(`Criança`);
} else if (idade < 60 ){
    console.log(`Adulto`)
} else{
    console.log(`Idoso`)
}