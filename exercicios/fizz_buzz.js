function fizz_Buzz(num){
    const divisor3 = num % 3 === 0 && num % 5 !== 0;
    const divisor5 = num % 5 === 0 &&  num % 3 !== 0;
    const divisor3_5 = num % 3 === 0 && num % 5 === 0;
    // typeof numero !== 'number'
    if(!Number.isInteger(num) ){
        return `${num}`;
    }
    if(divisor3){
        return 'Fizz';
    }else if(divisor5){
        return 'Buzz';
    }else if(divisor3_5){
        return 'FizzBuzz';
    }
    return '';
}
const maxi = 100;
const mini = 0;
const r = Math.floor(Math.random() * (maxi - mini) + mini);
console.log(r,fizz_Buzz(r));