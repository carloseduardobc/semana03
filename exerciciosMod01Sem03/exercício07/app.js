
const pessoa = {
  nome: 'Ada',
  idade: 36,
  profissao: 'matemática'
};

const destruir = ({ nome, idade, profissao }) => `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
const mensagem = destruir(pessoa);
console.log(mensagem);

/*
function destruir ({ nome, idade, profissao }) {    
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}.`;
}

const mensagem = destruir();
console.log(mensagem);
*/