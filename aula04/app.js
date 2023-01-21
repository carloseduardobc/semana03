console.log("Aula 04");


/*
EXEMPLO REST (declaração de função / criação de variáveis)
É REST quando da declaração de variáveis/parâmetros em uma função
É sempre o último dos parâmetros
*/

function somaTudo (a, b, ...vetor) {
//const somaTudo = (a, b, c, ...vetor) => { //Exemplo com Arrow Function
    
    console.log({a, b, vetor});
    let total = 0;
    for (let i = 0; i < vetor.length; i++){
        total += vetor[i]
    }
    return total;
}

//const resultado = [3, 6, 1, "2", [20]];
//O resultado dá 18, pois o 1 e 2 são destacados na linha 7 ou 8 (Arrow Function)

// const resultado = somaTudo(1, 2, 3, 4, 5, 6);
// console.log({resultado});


/*
EXEMPLO SPREAD (PARÂMETROS)
Funciona na chamada de uma função ou na criação de um array é SPREAD
*/
const vetorA = [1, 2, 3, 4];
function multiplicaTudo (a, b, c, d, e){
    console.log({a, b, c, d, e});
}

multiplicaTudo(50, ...vetorA, 100);


/*
EXEMPLO SPREAD (ARRAY)
Funciona na chamada de uma função ou na criação de um array
*/
const vetorB = [11, 22, ...vetorA, 33];
console.log(vetorB);


/*
EXEMPLO CONCATENAÇÃO DE ARRAYS COM SPREAD
*/
const vetorC = [...vetorA, ...vetorB]; //OU [...vetorB, ...vetorA];
console.log(vetorC);


/*
EXEMPLO DE SPREAD DE OBJETOS
*/
const objA = {a: 1, b: 2, c: 3};

//Dependendo da ordem que chaves iguais forem acrescentradas
//as últimas tem prioridades sobre as anteriores

// const objB = {d: 44, ...objA, e: 55, f: 66};
// const objB = {a: 44, ...objA, b: 55, c: 66};
// const objB = {a: 44, b: 55, c: 66, ...objA};
// const objB = {c: 44, d: 55, e: 66, ...objA};
// const objB = {...objA, c: 44, d: 55, e: 66};
// const objB = {...objA, b: 44, c: 55, d: 66};
// const objB = {b: 44, ...objA, c: 55, d: 66};
const objB = {b: 44, ...objA, c: 55, c: 888, d: 66};
console.log(objB);


/*
EXEMPLO DESTRUCTURING (ARRAY)
*/
const vetorD = [1, 2, 3, 4, 5, 6];
const [a, b, c, ...z] = vetorD;
//const [a, b, c, ...z] = [1, 2, 3, 4, 5, 6]; OUTRO EXEMPLO
console.log({a, b, c, z});

const vetorE = ["Romeu", 30, "Programador", "Mentor"];
// const vetorE = ["Romeu", 30, {profissao: "Programador"}]; OUTRO EXEMPLO
const [nome, idade, ...info] = vetorE;
console.log({nome, idade, info});
//AS CHAVES NO CONSOLE, SERVE PARA CRIAR OBJETOS. MESMA COISA QUE OS EXEMPOS ABAIXO
const m = {nome, idade};
const n = {
    nome: nome,
    idade: idade,
};
console.log(m, n);

// Destructuring direto na definição de variáveis em uma função
//EXEMPLO DESTRUCTURING (ARRAY / PARÂMETRO)
function coordenadas([x, y, z], extra){
//function coordenadas([x, y], extra){ OUTRO EXEMPLO
//function coordenadas([x, ...r], extra){ OUTRO EXEMPLO
    console.log({x, y, z, extra});
    //console.log({x, y, extra}); OUTRO EXEMPLO
    //console.log({x, r, extra}); OUTRO EXEMPLO
}
const ponto = [1, 2, 3];
coordenadas(ponto, 5);
//coordenadas(ponto, false);

//OUTRO EXEMPLO DE DESTRUCTURING
function coordenadas01([xA, yA, zA], [xB, yB, zB]){
        console.log({xA, yA, zA, xB, yB, zB});
    }
const pontoA = [1, 2, 3];
const pontoB = [4, 5, 6];
coordenadas01(pontoA, pontoB);


//EXEMPLO DESTRUCTURING (OBJECT)
const ObjC = {
    nome1: "Romeu",
    idade1: 30,
    ocupacao1: ["Programador", "Mentor"]
};
// const nome1 = ObjC.nome1;
// const idade1 = ObjC.idade1;
// const ocupacao1 = ObjC.ocupacao1;

// const { nome1 } = ObjC; //Destacando de dentro do objeto um objeto chamado "nome1" dentro do "ObjC" e colocando dentro de uma variável chamada "nome1"
// const { nome1, idade1 } = ObjC;
//const { nome1, ...info1 } = ObjC;
//const { ocupacao1, ...info1 } = ObjC;
// const { nome1: novoNome, ...info1 } = ObjC; //Dando um novo nome pra chave do objeto
const { nome1, ocupacao1: [o1], ...info1 } = ObjC; //Fazendo um destruct dentro do destructuring apenas do ítem "OCUPACAO1". Raro de ser feito
//const o2 = objC.ocupacao1[0]; // Mesma operação que a realizada acima. Inserindo o dado do objeto do índice 0 da "ocupacao1" na variável "o2".

// console.log({ nome1, idade1, ocupacao1 });
// console.log({ nome1, idade1 });
// console.log({ nome1, info1 });
// console.log({ ocupacao1, info1 }); //Em um ARRAY, é necessário pegar os ítens na ordem em que foram colocados. Em um objeto, basta informar diretamente a chave do objeto que quero buscar (E.: OCUPAÇÃO1). Neste caso, no "INFO1", ficam o restante dos ítens que não for OCUPACAO1
// console.log({ novoNome, info1 });
console.log({ nome1, o1, info1 });

//EXEMPLO DE DESTRUCTING DE UMA STRING

//const [ax, bx, cx] = "teste";
//const [ax, bx, ...cx] = "teste";
const [...cx] = "teste";
//console.log( { ax, bx, cx } );
console.log( { cx } );


/*
EXEMPLO DE USO REAL

const objOriginal = {
    nome: "Romeu",
    idade: 30,
    ocupacoes: ["Programador", "Mentor"]
};

const nome = prompt ("Escreva um novo nome");

const objNovo = {
    ...objOriginal,
    nome
};

console.log(objNovo);
*/