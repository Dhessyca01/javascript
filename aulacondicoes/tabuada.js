const leia = require('readline-sync');

let num;

num = leia.questionInt("\nDigite um número: ");

for(contador = 1; contador <= 10; contador ++){
    console.log(num+" x " + contador + " = " +(num * contador) );

}