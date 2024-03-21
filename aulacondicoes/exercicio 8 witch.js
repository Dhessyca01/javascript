//Desenvolva um algoritmo em Java para uma conta bancária. O programa deverá ler o tipo de operação a ser 
//realizada com base na tabela abaixo (número inteiro entre 1 e 3) e o valor a ser depositado ou sacado 
//(somente nas opções 2 e 3). Considere que um saque só pode ser realizado caso haja saldo suficiente. 
//Ao final de cada operação, exiba o novo Saldo na tela. A variável saldo (float), 
//será inicializada com o valor de R$ 1000.00. Caso a operação seja diferente do intervalo 1 a 3, 
//mostre a mensagem Operação Inválida!

const leia = require('readline-sync')

let valor, saldo = 1000.00, operacao;

console.log("Informe a operação");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Depósito");
operacao = leia.questionInt("Digite a opção desejada: ");

switch(operacao){
   
   
    case 1:
        console.log("1 - Saldo")
        console.log(`\nSeu saldo é: ${(saldo).toFixed(2)}`)

    break;

    case 2:
        console.log("2 - Saque")
        valor = leia.questionFloat("\nDigite o valor: ")

        if(saldo > valor){
            console.log(`\n O saldo agora é: ${ (saldo - valor).toFixed(2) }`);
        
        }else{
            console.log(`\n saldo da conta é insuficiente!`)
        }


    break;
    
    case 3:
        console.log("3 - Depósito")
        valor = leia.questionFloat("\nDigite o valor: ")
        console.log(`\n O novo saldo da conta é: ${saldo + valor}`);

    break;

    default:
        console.log("Operação Inválida");
}