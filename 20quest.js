// Verificação de Habilpontos em um Jogo

const prompt = require('prompt-sync')();

const pontos = parseInt(prompt(`Digite a pontuação: `));

if  (pontos <= 33){
    console.log(`Novato`);
} else if (pontos <= 66 ){
    console.log(`Intermediário`)
} else{
    console.log(`Experiente`)
}