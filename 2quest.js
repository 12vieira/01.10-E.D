// Classificação de Faixa de Nota de Teste

const prompt = require('prompt-sync')();

const notas = parseInt(prompt(`Digite a nota do teste: `));

if (notas > 80){
    console.log(`Muito bom`);
} else if(notas <= 80 && notas > 69){
    console.log(`Bom`)
} else if(notas >=50 && notas < 70){
    console.log(`Satisfatório`)
} else{
    console.log(`Insatisfatório`)
}