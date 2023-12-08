const nome = prompt('Digite seu nome completo: ');

document.body.innerHTML = `Seu nome completo é ${nome} <br/>`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é ${nome.charAt(1)} <br/>`;
document.body.innerHTML += `Primeio indice da letra "t" do seu nome é ${nome.indexOf('t', 0)} <br/>`;
document.body.innerHTML += `Último indice da letra "t" do seu nome é ${nome.lastIndexOf('t')} <br/>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome são ${nome.slice(-3)} <br/>`;
document.body.innerHTML += `As palavras do seu nome são "${nome.split(' ')}" <br/>`;
document.body.innerHTML += `Seu nome em letra maiúscula é "${nome.toLocaleUpperCase()}" <br/>`;
document.body.innerHTML += `Seu nome em letra minúscula é "${nome.toLocaleLowerCase()}" <br/>`;

