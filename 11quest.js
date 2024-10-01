// Classificação de Risco de Empréstimo

const prompt = require('prompt-sync')();

const cred = prompt(`Informe sua pontuação de crédito: `);

if (cred > 700){
    console.log(`Baixo`);
} else if (cred >= 500){
    console.log(`Moderado`)
} else{
    console.log(`Alto`)
}