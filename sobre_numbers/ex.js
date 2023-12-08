const numero = Number(prompt("Digite um número"));
const numTitulo = document.getElementById("number-title");
const conteudo = document.getElementById("text");

numTitulo.innerHTML = numero;
conteudo.innerHTML = `<p>A raiz quadrada do seu número é ${numero ** (1/2)}. <br/>
${numero} é inteiro? ${Number.isInteger(numero)}.<br/>
${numero} é NaN? ${Number.isNaN(numero)}.<br/>
Arredondando para baixo: ${Math.floor(numero)}.<br/>
Arredondando para cima: ${Math.ceil(numero)}.<br/>
Com duas casa decimais: ${numero.toFixed(2)}.</p>`