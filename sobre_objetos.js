// function criapessoa (nome,sobrenome, idade){
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = criapessoa('Artur', 'Samniotto', 23);
// console.log(pessoa1);

const pessoa = {
    nome: 'Artur',
    sobrenome: 'Oliveira',
    idade: 21,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando`);
    },

    incrementa(){ //funcao
        ++this.idade;
    },
}

pessoa.fala();
pessoa.incrementa();
console.log(pessoa.idade);