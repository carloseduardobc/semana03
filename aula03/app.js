//Quando existir a string "USE STRICT" no início de um documento de script,
//não será mais possível utilizar variáveis que não existem, que não foram definidas
//(variáveis que não usam a palavra reservada VAR, LET, CONST).
//Para criar novas variáveis sempre será necessário utilizar VAR, LET ou CONST

//Impede o uso de variáveis que não existem
//Automaticamente presente em script do tipo módulo
//Em caso de frameworks mais antigos (EX.: JQuery), é possível a necessidade do "use strict"
//'use strict'; 

// /*
// ESCOPO GLOBAL - Variável disponível em qualquer parte do código
// */
// var minhaVariavel = "ConteúdoDaVariável";
// /*
// ESCOPO DA FUNÇÃO - Disponível apenas dentro da função 
// */
// function funcaoExemplo() {
//     var varEscopoFuncao = "NoEscopoDaFuncao";
    
//     if(minhaVariavel){
//         var varEscopoFuncao = "NoEscopoDaFuncaoEDoBloco";
//     }

// }
// /*
// ESCOPO DE BLOCO - Bloco do IF/ELSE/FOR
// */
// if(minhaVariavel){
//     var varEscopoFuncao = "NoEscopoDoBloco";
// }

// /*
// EXEMPLO DE VAR ESCOPO DENTRO DA FUNÇÃO
// */
// function definirLargura() {
//     var largura = 100;
//     largura = 999;
//     console.log(largura);
// }
// definirLargura();
// //Este console.log dá erro pois esta variável "largura" só existe apenas dentro do escopo da função.
// //Ela foi criada dentro da função. Ela não está no escopo global
// console.log(largura); 

/*
EXEMPLO DE VAR ESCOPO DENTRO DE BLOCO
*/
// var altura = 100;
// if (altura > 90) {
//     var largura = 100;
//     console.log(largura);
// }
// console.log(largura);

// // //Se movermos a variável "largura" para fora da função,
// // //o código não apresenta mais erro na execução dos dois console.log
// // var larguras = 200;
// // function definirLarguras() {
// //     console.log(larguras);
// // }
// // definirLarguras();
// // console.log(larguras);

// function definirLarguras() {
//     larguras = 100;
//     console.log(larguras);
// }
// definirLarguras();
// console.log(larguras);

// /*
// EXEMPLO LET ESCOPO DE BLOCO
// */
// let pontos = 50;
// let venceu = false;
// if (pontos > 40) {
//     console.log('Passei pelo if!');
//     let venceu = true;
// }
// console.log('Venceu:', venceu);
// // Venceu: false

// /*
// EXEMPLO CONT
// */
// let pessoa = {
//     nome: 'Vitória',
//     idade: 31
//     };
//     // O que vai acontecer nas ocasiões abaixo?
//     // pessoa = { nome: 'Chinforínfola'};
//     pessoa.peso = 40;
//     console.log(pessoa);
//     // Como impedir que propriedades sejam alteradas?
//     const vitoria = Object.freeze(pessoa);

// const texto = ["blablabla"];
// texto[0] = "batata";
// console.log(texto);
// texto[1] = "couve";
// console.log(texto);

// const numero = [45];
// numero[0] = 33;

/*
function pegaPrompt() {
    const digitado = prompt("Digite algo:")
    console.log(digitado);
// digitado = prompt("Digite algo novamente:")
// console.log(digitado);
}
pegaPrompt();
pegaPrompt();
pegaPrompt();
*/

// for (let i = 0; i < 3; i++){
//     const digitado = prompt("Digite algo:");
//     console.log(digitado);
// }
// console.log(i);

// //EXEMPLO DE COMO PEGAR UM NÚMERO EM UMA LISTA
// const lista = [4, 5, 2, 77, 10, 99, 8];
// let max = 0;
// for (let i = 0; i < lista.length; i++){
//     const num = lista[i];
//     if (num > max){
//         max = num;
//     }
// }
// console.log(max);

// /*
// EXEMPLO HOSTING COM VAR (FUNCIONA APENAS COM VAR. CONST E LET DÁ ERRO)
// */
// console.log(numA); // undefined
// var numA;
// numA = 6;

// numB = 6;
// console.log(numB); // 6
// var numB;

// /*
// EXEMPLO HOSTING COM FUNCTION
// */
// dahOi();

// function dahOi() {
//     console.log("Oi!");    
// }



procuraTermo({
    texto: "O rato roeu a roupa do rei de Roma.",
    termo: "rato"
    }); // Deve retornar: true
    procuraTermo({
    texto: "O rato roeu a roupa do rei de Roma.",
    termo: "batata"
    }); // Deve retornar: false


/*
DEMONSTRA PRA QUALQUER PESSOA QUE OLHAR O CÓDIGO, QUE A VARIÁVEL EM 
QUESTÃO FOI COLOCADA NO ESCOPO GLOBAL INTENCIONALMENTE
Exemplo de criação de variável global
*/

//window.minhaVariavelGlobal = "teste";



/* EXEMPLO DE VARIÁVEL GLOBAL = THIS = WINDOW
this
Window {window: Window, self: Window, document: document, name: '', location: Location,…}
window
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
this === window
true
window.larguras
100
*/


// 02:25:00