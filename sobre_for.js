//for clássico

// for (i = 0; i < 5; i++){
//     console.log('Olá');
// }
// const elementos = [
//     {tag: 'p', texto: 'frase 1'},
//     {tag: 'div', texto: 'frase 2'},
//     {tag: 'footer', texto: 'frase 3'},
//     {tag: 'section', texto: 'frase 4'}
// ]

// for (let i = 0; i< elementos.length; i++){
//     console.log(elementos[i]['tag'], elementos[i]['texto']);
// }


// for in

// let frutas = ['maça', 'banana','pera'];

// for (let index in frutas){
//     console.log(frutas[index]);
// }

// const pessoa = {
//     nome:'artur',
//     sobrenome: 'Oliveira',
//     idade: '21'
// };

// for(let chave in pessoa){
//     console.log(chave, pessoa[chave]);
// }

//for of

const nome ='Artur Oliveira';
const nomes = ['artur', 'joao', 'davi'];
for(let valor of nome){
    console.log(valor);
}

nomes.forEach(function(valor, indice){
    console.log(valor,indice)
});