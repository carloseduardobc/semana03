//Javascript é um aglomerado de atributos e métodos
//ATRIBUTOS = DADOS
//MÉTODOS = FUNÇÃO

//Exemplo de inserção e remoção de elemento ao final do array

// const vetorExemplo = [];
// vetorExemplo.push(1, 2, 3);
// vetorExemplo.push('a', 'b', 'c');
// vetorExemplo.push('final');
// vetorExemplo.pop(); // Retira o último elemento da lista do array (APAGA A PALAVRA "FINAL")
// const ultimo = vetorExemplo.pop() // Pega o último elemento do array e armazena em uma variável (ELEMENTO "C" DO 2º PUSH)
// console.log(vetorExemplo, ultimo);


/*
FUNÇÕES (Síntaxe mínima de uma função comum: " function () {} ")
*/

//Exemplo com mátemática
// f(x, y) = x**2 + y;
// f(2, 3) = 2**2 + 3;

function funcaoExemplo1 (x, y) { //Definição/Declaração da função (linha 18, 19 e 20)
    return x**2 + y; //NÃO é obrigatório o "RETURN". Mas por padrão, o retorno de uma função sem "return" é "UNDEFINED"
}
//Outro modo de fazer a mesma função
function funcaoExemplo2 (x, y) { //Definição/Declaração da função
    const resultado = x**2 + y;
    return resultado;
}
//Exemplo passando apenas um valor para a função
function funcaoExemplo3 (x, y) {
    console.log({x, y});
    if (y !== undefined) {
    //if (typeof y === 'number') { //Neste caso entra no IF, apenas se o valor de "Y" for um número
        return x**2 + y;
    } else{
        return x**2;
    }
}
//Exemplo validando o tipo de dado
function funcaoExemplo4 (x, y) {
    console.log({x, y});
    if (typeof x !== 'number' || typeof y !== 'number') { //Verificação do tipo de dado informado
        //Caso algum dos parâmetros não for números, o "return" interrompe a execução e retorna "undefined"
        //return 'Os valores informados não são números'; Exemplo com mensagem de erro
        return;
    }
    return x**2 + y; // "**" operação de potenciação
}

const resultado1 = funcaoExemplo1(2, 3); //Invocando/Executando a função. Dentro dos paranteses ficam os parâmetros de valores da função. Basta colocar o nome dela, seguido de abre e fecha parenteses
const resultado2 = funcaoExemplo2(4, 5);
const resultado3 = funcaoExemplo3(6);
const resultado4 = funcaoExemplo4(7, 'z');
console.log("Resultado 01 = ", resultado1);
console.log("Resultado 02 = ", resultado2);
console.log("Resultado 03 = ", resultado3);
console.log("Resultado 04 = ", resultado4);

//Exemplo de função sem parâmetro e sem RETURN
function dahOi () {
    console.log("Oi!");
}
//Depois de iniciada, mesmo sem parâmetros...uma função pode ser chamada no código quantas vezes quiser
dahOi();
dahOi();
dahOi();

//Tarefa de Aula
function recebeNome (nome) {
    return nome;
}
const imprimiNome = recebeNome('Carlos Eduardo');
console.log("Olá, " + imprimiNome + "!");

//Resolução Professor (Exemplo com parâmetros e string)
function olaNome(nome) {
    console.log(`Olá, ${nome}!`); // Método de concatenação mais usado atualmente - EXEMPLO 01
}
olaNome('Batata');
//Outro Exemplo
function olaNome1(nome, idade) {
    return `Olá, ${nome}! Você tem ${idade} anos.`; //Método de concatenação mais usado atualmente - EXEMPLO 02    
}
const texto = olaNome1('Carlos', 42);
console.log(texto);

//FUNÇÃO ANÔNIMA - É usada para iniciar uma instrução ao sistema e depois ela é descartada para não ocupar mais espaço de memória

//Função anônima imediatamente executada
(function (n) { //Como não tem nome, usa-se parenteses transformando a função em um bloco de instrução
    console.log(`Sou uma função anônima ${n}!`);
}) (); //Abre-se e fecha-se parenteses após a função, para que ela seja executada

//Função anônima atribuída a uma variável
const variavelComFuncao = function (n) { //Transforma a função anônima em "função nomeada"
    console.log(`Funciono mesmo em uma variável ${n}!`);
};
variavelComFuncao('2º');

// --------------------------------------------------
//Para altera o nome de uma função/variável em todas as suas instâncias, mesmo se usada em outra arquivo (Cursor do mouse em cima + F2)
// --------------------------------------------------

/*
ARROW FUNCTIONS (Síntaxe mínima de uma arrow function: " () => {} ")
- A única maneira de nomear uma Arrow Function é atribundo à uma variável;
- A sua utilidade é ser enxuta e exigir menos sintáxe, o que auxilia quando precisamos passar uma função por parâmetro;
- Caso tenhamos apenas um parâmetro, pode se omitir o parenteses da porção de parâmetros;
- Caso não tenhamos nenhum parâmetros ou mais de um, é necessário utilizar parenteses
- Se tivermos um único comando, também podemos omitir as chaves;
*/

const varCompletaArrowFunction = (n) => {//Mesmo exemplo de função anônima atribuída a uma variável
    console.log(`Exemplo de Arrow Function ${n}!`);
}
varCompletaArrowFunction('- Com parenteses/Com chaves');

const varReduzidaArrowFunction = n =>
    console.log(`Exemplo de Arrow Function ${n}!`);
varReduzidaArrowFunction('- Sem parenteses/Sem chaves');

//COMPARANDO FUNÇÕES

//Função Comum
function fComum(x) {
    return x * 100;
}
//Arrow Function
const fArrowCompleta = (x) => {
    return x * 200;
}
//Arrow Function Forma Reduzida
const fArrowReduzida = x => x * 300; // Apenas 1 parâmetro, 1 única operação para retornar

// console.log(fComum(3));
// console.log(fArrow(6));
const rComum = fComum(3);
const rAComp = fArrowCompleta(3);
const rAReduz = fArrowReduzida(3);

console.log(rComum);
console.log(rAComp);
console.log(rAReduz);

// --------------------------------------------------
//EXEMPLO DE DIFERENÇA DE CONTEXTO THIS (VEREMOS NAS AULAS DE CLASSES)
//THIS - Referência do contexto onde está acontecendo a execução
//- O "THIS" da função comum é no momento da EXECUÇÃO. Já o "THIS" da Arrow Function é no momento da CRIAÇÃO
const objeto = { //CRIANDO
    nome: "Teste",
    nomeDaFuncao: function () {
        //Este "THIS" é o objeto
        console.log(this); //Este "THIS" pertence ao objeto
        console.log(window === this);
    },
    nomeDaArrow: () => {
        //Este "THIS" é o contexto global
        console.log(this); //Este "THIS" pertence a função
        console.log(window === this);
    }        
}
objeto.nomeDaFuncao(); //INVOCANDO
objeto.nomeDaArrow();
// --------------------------------------------------

/*
VETOR
*/

const vetorB = ['A', 'B', 'C'];
vetorB.push('D'); // PUSH - Acrescenta um elemento no vetor
console.log(vetorB);
//Imprimindo os dados do vetor, um de cada vez
for (let i = 0; i < vetorB.length; i++){
    console.log(`índice ${i} = ${vetorB[i]}`);
}

// FOREACH - "Para cada...será executado o número de vezes de ítens dentro do vetor"
vetorB.forEach (function (valor) {
    console.log(`índice = ${valor}`);
});

// Exemplo de função comum como parâmetro
vetorB.forEach (function (valor) {
    console.log(`O valor é ${valor}`);
});
// Exemplo de arrow function como parâmetro
vetorB.forEach (valor => console.log(`Valor = ${valor}`));



// EXEMPLOS
function criaVetor() {
    return [`s`, 3, {}];
}
console.log(criaVetor());

function calculaPonto(x, y, z) {
    return [x * 2, y * 2, z * 2];
}
console.log(calculaPonto(1, 2, 3));

function calculaPontoA(x, y, z) {
    const V = [x * 2, y * 2, z * 2];
    return V;
}
console.log(calculaPontoA(4, 5, 6));
/* IGUAL */
const calculaPontoB = (x, y, z) => [x * 2, y * 2, z * 2];
console.log(calculaPontoB(7, 8, 9));