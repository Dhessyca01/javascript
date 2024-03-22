//Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
//Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos. Veja o exemplo abaixo:

const leia = require('readline-sync')

let num, contador = 0

do {

    num = leia.questionInt('Digite um número inteiro: ');
    if(num > 0){
        contador += num 
    }
}while (num != 0)

console.log('A soma dos números positivos é: ', contador);