// let i = 0;

// while (i <= 10){
//     console.log(i);
//     i++;
// }

function random(min,max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const max = 50;
const min = 1;
let rand = 10;

while (rand !== 10){
    rand = random(min, max);
    console.log(rand);
}


do{
    console.log(rand);
}while(rand !== 10);