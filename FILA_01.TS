import { Queue } from "./AULA/class/queue";
const readline = require('readline-sync');


const fila = new Queue<string>()

while (true) {

    let opcao:number;
    let nome:string;

console.log("************************************");
console.log("                                    ");
console.log("1 -    Adiciconar Cliente na Fila   ");
console.log("2 -    Llistar Todos os Clientes    ");
console.log("3 -    Retirar Cliente da Fila      ");
console.log("0 -              Sair               ");
console.log("                                    ");
console.log("************************************");


console.log("       DIGITE A OPÇÃO DESEJADA:     ");
console.log("                                    ");
opcao = readline.questionInt("");

if (opcao == 0) {
process.exit(0);
}

switch(opcao) {
  case 1:
      console.log("\nInsira um nome: ");
      nome = readline.question("Digite o nome: ")
      fila.enqueue(nome);
      aguardar() 
      console.log(`O ${ nome} foi adicionado com sucesso`)
      break;

  case 2:
      console.log("\nOs elementos da fila são: ");
      aguardar()
      fila.printQueue();
      break;

  case 3:
      console.log("\nRetire um nome da fila: ");
      fila.dequeue()
      aguardar() 
   
      
      break;

  case 0: console.log("Saindo do programa...");
  process.exit(0);

  default:

  console.log(`O numero ${opcao} não foi encontrado`)

  break;
      
}
  

}



export function aguardar(): void {
console.log("\n*****************************************************");
console.log("Executando...                                          ");
console.log("*******************************************************");
}