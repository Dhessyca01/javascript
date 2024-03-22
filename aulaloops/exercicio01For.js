//Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos 
//números são pares e quantos número são ímpares

const leia = require('readline-sync')

let contPares = 0;
let contImpares = 0;

for (let i = 0; i < 10; i++) {
    let numero = leia.questionInt("Digite um numero inteiro: ", 10);
    if (numero % 2 === 0) {
        contPares++;
    }else{
        contImpares++;

    }
}
console.log (`Números pares: ${contPares}
Números Ímpares: ${contImpares}`);