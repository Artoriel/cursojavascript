let var1 = 'A';
let var2 = 'B';
let var3 = 'C';
const auxA = var1;

var1 = var2;
var2 = var3;
var3 = auxA;

[var1, var2, var3] = [var2, var3, var1];


console.log(var1,var2,var3);