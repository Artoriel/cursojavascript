// const pessoa = {
//     nome: 'Artur',
//     sobrenome: 'Oliveira'
// };

// const chave = 'nome';
// console.log(pessoa.nome);
// console.log(pessoa[chave]);


// const pessoa1 = new Object();
// pessoa1.nome = 'Luiz';
// pessoa1.idade = 30;
// pessoa1.falarNome = function(){
//     console.log(`${this.nome} está falando`);
// };

// pessoa1.getNascimento= function(){
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade;
// };

// console.log(pessoa1.getNascimento());
// pessoa1.falarNome();
// console.log(pessoa1.nome);

// for (let chave in pessoa1){
//     console.log(pessoa1[chave]);
// }

// factory functions / constructor function / classes
// function criaPessoa(nome,sobrenome){
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     };
// }

// const p1 = criaPessoa('Luiz', 'Otavio');
// console.log(p1.nomeCompleto);

function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('Artur', 'Oliveira');
console.log(p1);