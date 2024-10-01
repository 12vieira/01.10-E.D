// Classificação de Reações em uma Pesquisa

const prompt = require('prompt-sync')();

const nota = parseInt(prompt(`Digite a nota: `));

if (nota == 1){
    console.log(`Muito insatisfeito`);
} else if(nota == 2){
    console.log(`Insatisfeito`)
} else if(nota == 3){
    console.log(`Neutro`)
} else if(nota == 4){
    console.log(`Satisfeito`)
} else{
    console.log(`Muito satisfeito`)
}