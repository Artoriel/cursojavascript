/*
&& -> end
|| -> or
! -> Not (inverte)

VALORES AVALIADOS EM FALSY
false
0
'' "" `´
null/ undefined
NaN
*/
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

console.log(!false);