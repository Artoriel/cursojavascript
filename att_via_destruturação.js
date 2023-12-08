// let a = 'a';
// let b = 'b';
// let c = 'c';

// const numeros = [1,2,3];
// [a,b,c] = numeros;
// console.log(a,b,c);

const numeros = [1,2,3,4,5,6,7,8,9];
const [primeiro, ,terceiro, ...resto] = numeros;
console.log(primeiro, terceiro, resto);


//COM OBJETOS

const pessoa = {
    nome: 'Artur',
    sobrenome: 'Oliveira',
    idade: 30,
    endereco: {
        rua: 'Rua Bungas',
        numero: 30
    }
};

const {nome: teste='Joao', sobrenome, endereco: {rua, numero}} = pessoa;
console.log(teste, sobrenome, rua, numero);