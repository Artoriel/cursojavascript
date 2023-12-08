function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const resultado_neg = document.querySelector('.resultado-neg');


    function recebeEventoForm(evento) {
        evento.preventDefault();
        const peso = Number(form.querySelector('.peso').value);
        const altura = Number(form.querySelector('.altura').value);

            
        const imc = peso / (altura * altura).toFixed(2)
        const abaixoPeso = imc < 18.5;
        const pesoNormal = imc > 18.5 && imc < 24.9;
        const sobrePeso = imc > 25 && imc < 29.9;
        const obesidade1 = imc > 30 && imc < 34.9; 
        const obesidade2 = imc > 35 && imc < 39.9;    
        const obesidade3 = imc > 40;

        resultado_neg.innerHTML = ``;
    
            if (abaixoPeso) {
                resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (abaixo do peso).`;
            } else if (pesoNormal) {
                resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (peso normal).`;
            } else if (sobrePeso) {
                resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (Sobrepeso).`;
            } else if (obesidade1) {
                resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (obesidade 1).`;
            } else if (obesidade2) {
                resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (obesidade 2).`;
            } else if (obesidade3 && altura !== 0) {
                resultado.innerHTML = `Seu imc é ${imc.toFixed(2)} (obesidade 3).`;
            }
            else {
                resultado.innerHTML = ``
                resultado_neg.innerHTML = `Valor inválido`;
            }
            

    }

    form.addEventListener('submit', recebeEventoForm);
    


}


escopo();