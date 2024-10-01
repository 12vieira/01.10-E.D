// Classificação de Tamanho de Roupa

const prompt = require('prompt-sync')();

const tamanho = prompt(`Digite o tambanho de roupa: `)

if (tamanho == "P" || tamanho == "p"){
    console.log(`Pequeno`);
} else if(tamanho == "M" || tamanho == "m"){
    console.log(`Médio`)
} else if(tamanho == "G" || tamanho == "g"){
    console.log(`Grande`)
} else{
    console.log(`Tamanho inválido`)
}