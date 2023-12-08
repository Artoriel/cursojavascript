//arguments sustenta todos os argumentos enviados
// function funcao(a,b,c){
//     let total = 0;
//     for(let argument of arguments){
//         total += argument;
//     }
//     console.log(total,a,b,c);
// }
// //javascript ignora parametros
// funcao(1,2,3,4,5,6,7);

// function funcao(a,b,c,d,e,f){
//     console.log(a,b,c,d,e,f);
// }

// funcao(1,2,3);

// function funcao(a, b= 2, c= 4){
//     console.log(a + b + c);
// }

// funcao(2, undefined, 20);

// function funcao({nome,sobrenome,idade}){
//     console.log(nome,sobrenome,idade);
// }
// obj = {nome:'Artur', sobrenome:'Oliveira', idade: 22}
// funcao(obj)

// function funcao([valor1,valor2,valor3]){
//     console.log(valor1,valor2,valor3);
// }

// funcao(['a','b','c'])

const conta = function (operador, acumulador, ...numeros){
    for(let numero of numeros){
       if(operador === '+') acumulador += numero;
       if(operador === '-') acumulador -= numero;
       if(operador === '/') acumulador /= numero;
       if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};

conta('+', 0, 20,30,40,50)


const conta1 = (...args)=>{
    console.log(args);
}
conta1('+',1,2,3,4)