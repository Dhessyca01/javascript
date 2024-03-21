//Com base na tabela abaixo, escreva um algoritmo em Java que leia o código de um item 
//(número inteiro de 1 a 6) e a quantidade comprada deste item (número inteiro). 
//A seguir, mostre na tela o valor total da conta e o nome do produto que foi comprado.

const leia = require('readline-sync')

 {

    let nomeProduto = "";
    let preco = 0
    let quantidade = 10000;

    console.log("1 cachorro quente");
    console.log("2 X - salada");
    console.log("3 X - bacon");
    console.log("4 Bauru"); 
    console.log("5 Refrigerante");
    console.log("6 Suco de laranja");
    produto = leia.questionInt("Digite a opção desejada: ");
    
    switch (nomeProduto) {

    case 1:
        nomeProduto = "cachorro quente";
        omeProduto = (10.00).toFixed(2)
        quantidade = 10000
        break;

    case 2:
        nomeProduto = "X -salada";
        preco = (15.00).toFixed(2)
        quantidade = 10000
        break;
    
    case 3:
        nomeProduto = "X- bacon";
        preco = (18.00).toFixed(2)
        quantidade = 10000
        break;
        
    case 4:
        nomeProduto = "Bauru";
        preco = (12.00).toFixed(2)
        quantidade = 10000
        break;
        
    case 5:
        nomeProduto = "Refrigerante";
        preco = (8.00).toFixed(2)
        quantidade = 10000
        break;

    case 6:
        nomeProduto = "Suco de laranja";
        preco = (13.00).toFixed(2)
        quantidade = 10000
        break;
        
        default:
            console.log("Código inválido!");
            
    }

    const total = preco * quantidade;
    console.log(`Produto comprado: ${produto}`);
    console.log(`Valor total da conta: R$ ${total.toFixed(2)}`);

    
}


