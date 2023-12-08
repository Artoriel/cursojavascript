numeros = [5,50,34,21,2,10,6,4,56,98,76];
//dobrar numeros
//altera o valor do array (nao altera o original)
// const numerosDobro = numeros.map(valor => valor * 2);
// console.log(numerosDobro);

const pessoas = [
    {nome: 'Luiz', idade: 32},
    {nome: 'Artur', idade: 21},
    {nome: 'Paula', idade: 14},
    {nome: 'Beatriz', idade: 65},
    {nome: 'Maria', idade: 43},
];

const nomes = pessoas.map(valor => valor.nome);
console.log(nomes);
const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);
const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = (indice + 1) * 1000;
  return newObj;
});
console.log(comIds);