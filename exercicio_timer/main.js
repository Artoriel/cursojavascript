function criarHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000);   
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    });

}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criarHoraDosSegundos(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('reiniciar')){
        clearInterval(timer);
        relogio.classList.remove('pausado')
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    } 
    if (el.classList.contains('iniciar')){
        relogio.classList.remove('pausado')
        clearInterval(timer)
        iniciaRelogio();
    } 
    if (el.classList.contains('pausar')){
        relogio.classList.add('pausado')
        clearInterval(timer);
    } 
})

// iniciar.addEventListener('click', function (event) {
// });
// pausar.addEventListener('click', function (event) {
// });
// reiniciar.addEventListener('click', function (event) {
// });