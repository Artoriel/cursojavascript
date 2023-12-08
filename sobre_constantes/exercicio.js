const nome = 'Artur';
const sobrenome = 'Oliveira';
const idade = 18;
const altura = 1.80;
const peso = 55;
let imc; // peso / (altura * altura)
let anonascimento;

imc = peso / (altura * altura);
anonascimento = 2023 - idade;

console.log(nome, sobrenome, 'tem', idade, 'de idade, pesa', peso, 'Kg, tem', altura, 'm de altura, seu IMC é', imc, 'e nasceu em', anonascimento);
//template string
console.log(`${nome} ${sobrenome} tem o IMC de ${imc}`)