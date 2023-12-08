const numeros = [5,50,34,21,2,10,6,4,56,98,76];
const numPares = numeros.filter(valor => valor % 2 ===0
    ).map(valor => valor *2).reduce((ac, valor) => ac + valor
);
console.log(numPares);