
// const vetorA = [1, 2, 3, 4, 5];
// const vetorB = [6, 7, 8, 9,10];

// const novoArray = [...vetorA, ...vetorB];
const concatena = (vetorA, vetorB) => [...vetorA, ...vetorB];

const novoArray = concatena([1, 2, 3, 4, 5], [6, 7, 8, 9,10]);

console.log(novoArray);