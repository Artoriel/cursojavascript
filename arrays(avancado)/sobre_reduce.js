// const numeros = [5,50,34,21,2,10,6,4,56,98,76];
// const total = numeros.reduce(function(acumulador, valor, indice, array){
//     acumulador += valor;
//     return acumulador;
// }, 0);
// console.log(total);

// const numeros = [5,50,34,21,2,10,6,4,56,98,76];
// const total = numeros.reduce(function(acumulador, valor, indice, array){
//     if (valor % 2 === 0) acumulador.push(valor);
//     return acumulador;
// }, []);
// console.log(total);

const pessoas = [
    {nome: 'Luiz', idade: 32},
    {nome: 'Artur', idade: 21},
    {nome: 'Paula', idade: 14},
    {nome: 'Beatriz', idade: 65},
    {nome: 'Maria', idade: 43},
];
// pessoaMaisVelha = pessoas[0]['idade'];
// //retornar a pessoa mais velha
// for (let pessoa of pessoas){
//     if(pessoa['idade'] > pessoaMaisVelha){
//         pessoaMaisVelha = pessoa;
//     }
// }
// console.log(pessoaMaisVelha);

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);
