function aleatorio(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max -min) + min);
}

function wait(msg,tempo){
 return new Promise((resolve,reject) => {
    if(typeof msg !== 'string'){ reject('BAD VALUE');
    return;
    }
    setTimeout(()=>{
        resolve(msg.toUpperCase());
        return;
    }, tempo);
 });
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
    // 'Primeiro valor',
    wait('Promise 1', aleatorio(1,5)),
    wait('Promise 2', aleatorio(1,5)),
    wait('Promise 3', aleatorio(1,5)),
    // wait(1000,1000),
    // 'Outro Valor'
];

// Promise.all(promises).then(
//     function(valor){
//         console.log(valor);
//     }    
//     ).catch(function(erro){
//         console.log(erro);
//     }
//     );


Promise.race(promises).then(
    function(valor){
        console.log(valor);
    }    
    ).catch(function(erro){
        console.log(erro);
    }
    );

function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Pagina em cache');
    }else{
        return wait('Baixei a página', 1000);
    }
}

baixaPagina().then(dadosP => 
    console.log(dadosP))
    .catch(e => console.log('ERRO', e));