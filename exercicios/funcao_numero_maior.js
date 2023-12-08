function numeroMaior (num1, num2){
    if(num1 !== Number || num2 !== Number){
        return `valores inválidos`
    }
    // const numeromaior = num1 > num2 ? num1 : num2;
    // return numeromaior;
    return Math.max(num1,num2);
}


console.log(numeroMaior('d',9));