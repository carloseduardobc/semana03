// const titulo = document.getElementById("titulo"); /* FUNÇÃO PARA PEGAR ELEMENTO (Query HTML) - getElementById*/
// console.log('Olá, dev!', titulo);

//TRUE =  true, qualquer número (POSITIVO OU NEGATIVO), exceto 0. String que não esteja vazia
//FALSE =  0, String vazia, FALSO, NULL, UNDEFINED, NAN é FALSO
//TYPEOF é um operador UNÁRIO, pois trabalha com apenas uma variável
//Evitar utilizar JAVASCRIPT (OPERADOR TERNÁRIO) para selecionar CSS..."se Mobile use este CSS, se DESKTOP, use este CSS" (Exemplo colega LUA: Media Query...)

//EXEMPLO OPERADOR TERNÁRIO -  É basicamente um IF/ELSE. Um IF pode não ter um ELSE, mas operador ternário SEMPRE vai ter

const verdade = true;
if (verdade){
    console.log('É verdade!');
} else{
    console.log('Não é verdade!');
}
// Ternário: a ? b : c
verdade ? console.log('É verdade!') : console.log('Não é verdade!');
//verdade = (verdade) | ? | console.log('É verdade!') = {console.log('É verdade!');} | : | console.log('Não é verdade!') = else{console.log('Não é verdade!');};
//OUTRO EXEMPLO
const resultado = (2 + 2 === 4 ? "SIM" : "NÃO");
console.log(resultado);


// /* SWITCH CASE - Interessante usar quando se está comparando apenas uma variável */

const numero = 5;

if (numero === 0){
    console.log("ZERO");
} else if (numero === 1){
    console.log('UM!');
} else if (numero === 2){
    console.log('DOIS!');
} else if (numero === 3){
    console.log('TRÊS!');
}else{    
    console.log('OUTRO!');
}

switch (numero) { /* O problema do switch case é que não se pode usar uma condição */
    case 0:
        console.log('ZERO!');
        break;
    case 1:
        console.log('UM!');
        break;
    case 2:
        console.log('DOIS!');
        break;
    case 3:
        console.log('TRÊS!');
        break;
    default:
        console.log('OUTRO!');
        break;
}

/* Exemplo de outro uso do operador "OU (||)" */
const numA = 0;
const numB = numA || "abcdef";
const numc = numA ?? "abcdef"; /* Operador de Coalecência Nula*/
console.log(numB, numc);

/* Exemplo de outro uso do operador "E (&&)" */
const numD = 0; /* Se o primeiro valor for nulo (0 por exemplo), ele nem olha o segundo valor */
const numE = numD && "CCCCC";
console.log(numE);

const imprimeTela = true;
if(imprimeTela){
    console.log("Imprimiu 1");
}
imprimeTela && console.log("Imprimiu 2");

/* ARRAY */

const vetorA = []; // Maneira de criar um vetor
// const vetorB = new Array(); // Maneira alternativa de criar um vetor (NÃO UTILIZAR ESTA PRÁTICA)
// console.log({ vetorA, vetorB}); // No JavaScript, o TypeOf de um ARRAY é um OBJECT
console.log(typeof vetorA);

//Verificando se uma variável é ARRAY
console.log(Array.isArray(vetorA));
console.log({vetorA});

//Colocando valores no Array, os valores são em ordem de ítem no vetor
const vetorB = [2, 4, "Carlos", null, NaN] //É possível iniciar com valores pré definidos e é possível acrescentar depois
//Acrescentando ítens no array
vetorB.push(123);
vetorB.push(456);
console.log(vetorB);
//Substituindo um valor
vetorB[1] = "Fernanda"; 
console.log(vetorB);

//Acessando um valor específico
console.log(vetorB[2]);
//Acessando ítem fora do Array - UNDEFINED - Para ítens que não existem ou números negativos
console.log(vetorB[10]);
//Como saber o tamanho do Array
console.log(vetorB.length);
//Acessando o último ítem do Array
console.log(vetorB[vetorB.length - 1]); // Método de acessar o último ítem de um Array 
console.log(vetorB.at(-1)); // Novo método de acessar o último ítem de um Array 

console.log(vetorB.includes('Carlos')); //Procurando um valor dentro do Array e volta um valor lógico (TRUE ou FALSE)

/* DIFERENÇA DE VETOR PARA OBJETO (OBJECTS) */

const objetoA = {}; //Objeto vazio. Paera se iniciar um objeto usa-se "CHAVES"
/* const objetoB = new Object{}; // Maneira alternativa de criar um objeto (NÃO UTILIZAR ESTA PRÁTICA) */
console.log(typeof objetoA);

//Iniciando objeto com chaves/valores prédefinidos (Inciar o nome de um objeto com "_" ou "$"")
const objetoB = {nome: "Carlos", idade: 42};
console.log(objetoB);
console.log(objetoB.nome);
//Acrescentando chave/valor após a definição
objetoB.ocupacao = "Programador";
console.log(objetoB.ocupacao);
console.log(objetoB);
//Alterando o valor de uma chave/valor já existente
objetoB.ocupacao = "Jogador";
console.log(objetoB.ocupacao);
console.log(objetoB);

//Congelando um objeto
 Object.freeze(objetoB);
 objetoB.nome = 'Eduardo';
 //Criando um objeto já "congelado"
const objetoC = Object.freeze({nome: 'Teste'});
console.log(objetoB);


// //Exemplos de Arrays e Objetos Misturados

/* DIFERENÇA ENTRE VARIÁVEIS SIMPLES E VARIÁVEIS INDICANDO VETOR/OBJETO */
let numeros = 6;
const obj = {n: numeros};
numeros = 8;
console.log({ obj, numeros});

let numeros1 = [7];
const obj1 = {n: numeros1};
numeros1[0] = 9;
console.log({ obj1, numeros1});