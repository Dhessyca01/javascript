const leia = require('readline-sync');

let nome;
let idade;

nome = leia.question("\nDigite seu nome: ")
idade = leia.questionInt("\nDigite sua idade: ")

if(idade > 0 && idade <= 10){
    console.log("\no seu plano de saúde custará R$100,00 por mês.")
}else if(idade <= 29){
    console.log("\no seu plano de saúde custará R$200,00 por mês.")
}else if(idade <= 45){
    console.log("\no seu plano de saúde custará R$300,00 por mês.")
}
//pode ser assim tambem, codigo menor e mais otimizado.