// Leia quatro valores float (n1,n2,n3,n4) Depois calcule e mostre a diferença do 
//produto entre o n1 e n2 pelo produto entre o n3 e n4. Veja os exemplos abaixo:

const leia = require('readline-sync')

let n1, n2, n3, n4;

n1 = leia.questionFloat("Digite o primeiro numero : ");
n2 = leia.questionFloat("Digite o segundo  numero : ");
n3 = leia.questionFloat("Digite o terceiro numero : ");
n4 = leia.questionFloat("Digite o quarto numero : ");

diference = (n1*n2) - (n3*n4);

console.log("A diferença entre os números 1 e 2 para 3 e 4 é: " + diference)