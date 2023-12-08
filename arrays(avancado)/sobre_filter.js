const numeros = [5,50,34,21,2,,6,4,56,98,76];

// function callbackFilter(valor){
//     return valor > 10;
// }
// filter sempre retorna um array com a mesma quantidade de elementos ou menos.
// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);
// for (let num of numeros){
//     if(num > 10){
//         lista.push(num);
//     }
    
// }
// console.log(lista);

const pessoas = [
    {nome: 'Luiz', idade: 32},
    {nome: 'Artur', idade: 21},
    {nome: 'Paula', idade: 14},
    {nome: 'Beatriz', idade: 65},
    {nome: 'Maria', idade: 43},
];

// const pessoasf = [];
// for (let pessoa of pessoas){
//     if(pessoa['nome'].length > 4 && pessoa['idade'] > 50) 
//         pessoasf.push(pessoa)
// }
// console.log(pessoasf);

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >=5);
console.log(pessoasComNomeGrande)
const pessoasComMais50 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMais50);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log(nomeTerminaComA);

