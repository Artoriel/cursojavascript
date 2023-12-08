//declaração de função (function hoisting)


falaOi();


function falaOi(){
    console.log('oie');
}

//first-class objects
// Funtion expression

const souUmDado = function (){
    console.log('Sou um dado');  
}

souUmDado();

function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow')
}
funcaoArrow();

//dentro de um objeto
const obj = {
    falar(){
        console.log('Estou aqui..');
    }
};
obj.falar();
