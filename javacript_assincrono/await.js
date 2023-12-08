function aleatorio(min= 0,max= 3){
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
async function executa(){
   try{
   const fase1 = await wait('Fase 1', aleatorio());
   console.log(fase1);
   const fase2 = await wait(2, aleatorio());
   console.log(fase2);
   console.log('Terminamos na fase: ', fase2);
   }catch(e){
    console.log(e);
   }
}

executa();