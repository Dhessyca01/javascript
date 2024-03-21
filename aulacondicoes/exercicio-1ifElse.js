// Faça um algoritmo em Java que leia 3 valores inteiros A, B e C 
//e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leia = require('readline-sync');
{

let a, b, c;

a = leia.questionFloat("Digite o valor A : ");
b = leia.questionFloat("Digite o valor B : ");
c = leia.questionFloat("Digite o valor C : ");


if (a+b > c) {
    console.log('A soma de a + b é maior que c.');
} else if (a+b < c) {
    console.log('A soma de a + b é menor que c.');
} else if (a+b ==c)  {
    console.log('A soma de a + b é igual a c.')

}function compararSoma(a, b, c){ 
        const soma = (a+b);
}
    
}