const leia = require('readline-sync');

let nome;
let idade;

nome = leia.question("\nDigite seu nome: ")
idade = leia.questionInt("\nDigite sua idade: ")

if(idade > 0 && idade <= 10){
    console.log("\no seu plano de saúde custará R$100,00 por mês.")
}else{
    console.log("\nSua idade nao e valida.")
}