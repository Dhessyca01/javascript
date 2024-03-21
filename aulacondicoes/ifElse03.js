const leia = require('readline-sync');

let nome;
let idade;

nome = leia.question("\nDigite seu nome: ")
idade = leia.questionInt("\nDigite sua idade: ")

if(idade > 0 && idade <= 10){
    console.log("\no seu plano de saúde custará R$100,00 por mês.")
}else if(idade >= 11 && idade <= 29){
    console.log("\no seu plano de saúde custará R$200,00 por mês.")
}else if(idade >= 30 && idade <= 45){
    console.log("\no seu plano de saúde custará R$300,00 por mês.")
}else if(idade >= 46 && idade <= 59){
    console.log("\no seu plano de saúde custará R$400,00 por mês.")
}else if(idade <= 0){
    console.log("\nDigite uma idade válida!")
}else{
    console.log("\no seu plano de saude custará R$1000,00 por mes.")
}