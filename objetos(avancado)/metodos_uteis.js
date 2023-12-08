const produto = {nome: 'Produto', preco: 1.8};
// const caneca = {...produto,
//     material: 'porcelana'
// }; //copiado e diferentes
const caneca1 = {nome: produto.nome, preco: produto.preco};
const caneca = Object.assign({}, produto, {material: 'porcelana'}); // copiado tambem
console.log(caneca);
console.log(produto);
console.log(Object.keys(produto));

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable:false,
    value: 'Outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

console.log(Object.values(caneca));
// console.log(Object.entries(caneca));

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave,valor);
}