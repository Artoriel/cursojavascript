//return
//retorna um valor e acaba

// function soma(a,b){
//     return a + b
// }

// function soma2(a,b){
//     console.log(a + b);
// }

// console.log(soma(3,3))
// soma2(5,2)
// document.addEventListener('click', function(){
//     document.body.style.background = 'red';
// });

// function criaPessoa(nome, sobrenome){
//     return {nome, sobrenome};
// }

// const p1 = criaPessoa('Artur', 'Oliveira');

// console.log(p1)

// function falaFrase(comeco){
//     function FalaResto(resto){
//         return comeco + ' ' + resto;
//     }
//     return FalaResto;
// }

// const olamundo = falaFrase('Olá');
// console.log(olamundo('mundo!'))

function criaMultiplicador(multiplicador){
   return function(n){
    return n * multiplicador;
   };
}

const duplica = criaMultiplicador(2)
console.log(duplica(4));