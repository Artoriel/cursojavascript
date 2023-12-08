function aleatorio(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max -min) + min);
}

function wait(msg,tempo){
 return new Promise((resolve,reject) => {
    if(typeof msg !== 'string') reject('BAD VALUE');
    setTimeout(()=>{
        resolve(msg);
    }, tempo);
 });
}


wait('Frase 1', aleatorio(1,3)).then(resposta => {
    console.log(resposta);
    return wait('Frase 2', aleatorio(1,3));
}).then(resposta => {
    console.log(resposta);
    return wait('Frase 3', aleatorio(1,3));
}).then(resposta => {
    console.log(resposta);
}).catch(e => {
    console.log('ERRO:', e);
});
// wait('Frase 2', aleatorio(1,3));
// wait('Frase 3', aleatorio(1,3));