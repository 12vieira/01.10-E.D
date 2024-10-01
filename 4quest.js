// Verificação de Status de Pedido

const prompt = require('prompt-sync')();

const status = prompt(`Digite o status do pedido: `)

if (status == 1){
    console.log(`Em processamento`);
} else if(status == 2){
    console.log(`Enviado`)
} else if(status == 3){
    console.log(`Entregue`)
} else if(status == 4){
    console.log(`Cancelado`)
} else if(status == 5){
    console.log(`Devolvido`)
} else{
    console.log(`Status Inválido`)
}