// + -> adição/ concatenação
// - -> subtração
// ** -> potenciação 
// % -> resto da divisão
//  / -> divisão


// precedencia
// () -= ** -=  * / % -- + -
//NaN -> Not a number

//parseInt -> transforma string em number(quando possivel)
// parseFloat -> float
//Number() - converte number
let n = 2;
let n2 = '3';
n2 = parseInt(n2)
console.log(n + n2, typeof n);