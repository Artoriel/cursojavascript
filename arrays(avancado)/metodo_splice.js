const nomes = ['Maria', 'Joao', 'Edu', 'Ana', 'Chloe'];

// nomes.splice(indice, delete, ele1,ele2,ele3);
//pop
// const removidos = nomes.splice(-2, Number.MAX_VALUE);
//  console.log(nomes, removidos);
// const removidos = nomes.splice(3 , 2 , 'Luiz', 'Otávio');
// console.log(nomes, removidos)


// shift
// const removidos = nomes.splice(0,1);
// console.log(nomes, removidos);

// //push
// nomes.splice(nomes.length, 0, 'Luiz', 'Gabriel');
// console.log(nomes);

//unshift
nomes.splice(0,0, 'Luiz', 'Otavio')
console.log(nomes);

