function saudacao(nome = 'Luiz'){
   return `Bom dia, ${nome}`
}

const saudar = saudacao();
console.log(saudar);

const raiz = function(n){
    return n ** 0.5
};

const mulpor10 = n => n * 10;

console.log(raiz(4));
console.log(mulpor10(4))