function criaNovoCpf(cpf){
    if(!checaCpf(cpf)) return false;
    let cpfdefinitivo = cpf.replace(/\D+/g, '');
    let cpfLimpo = cpfdefinitivo.slice(0, -2);;
    cpfArray = Array.from(cpfLimpo);
    let digito1 = conferePrimeiroDigito(cpfArray);
    let cpfLimpo2 = cpfLimpo + String(digito1);
    cpfArray2 = Array.from(cpfLimpo2);
    let digito2 = confereSegundoDigito(cpfArray2);
    let novocpf = cpfLimpo + String(digito1) + String(digito2);
    return novocpf === cpfdefinitivo; 
}

function checaCpf(cpfLimpo){
    if(typeof cpfLimpo === 'number') return false
    if(typeof cpfLimpo === 'undefined') return false;
    if(cpfLimpo.replace(/\D+/g, '').length !== 11) return false;
    if(isSequencia(cpfLimpo.replace(/\D+/g, ''))) return false;
    return true;
}

function isSequencia(cpfLimpo){
    const sequencia = cpfLimpo[0].repeat(cpfLimpo.length);
    return sequencia === cpfLimpo;
}

function conferePrimeiroDigito(cpfA){
    let cont1 = 10
    let primeiroDigito = cpfA.reduce(function(acumulador, valor){
        acumulador += Number(valor) * cont1;
        cont1 --;
       
        return acumulador
    }, 0);
    
    calcPriDigito = 11 - (primeiroDigito % 11);
    if (calcPriDigito > 9){
        calcPriDigito = 0;
        return calcPriDigito;
    }
    return calcPriDigito;
} 

function confereSegundoDigito(cpfA2){
    let cont2 = 11
    let segundoDigito = cpfA2.reduce(function(acumulador, valor){
        acumulador += Number(valor) * cont2;
        cont2 --;
       
        return acumulador
    }, 0);
 
    calcPriDigito = 11 - (segundoDigito % 11);
    if (calcPriDigito > 9){
        calcPriDigito = 0;
        return calcPriDigito;
    }
    return calcPriDigito;
}

if(criaNovoCpf('378.537.200-09')){
    console.log('CPF válido');
}else{
    console.log('CPF inválido');
}

// function ValidaCPF(cpfEnviado) {
//     Object.defineProperty(this, 'cpfLimpo', {
//       enumerable: true,
//       get: function() {
//         return cpfEnviado.replace(/\D+/g, '');
//       }
//     });
//   }
  
//   ValidaCPF.prototype.valida = function() {
//     if(typeof this.cpfLimpo === 'undefined') return false;
//     if(this.cpfLimpo.length !== 11) return false;
//     if(this.isSequencia()) return false;
  
//     const cpfParcial = this.cpfLimpo.slice(0, -2);
//     const digito1 = this.criaDigito(cpfParcial);
//     const digito2 = this.criaDigito(cpfParcial + digito1);
  
//     const novoCpf = cpfParcial + digito1 + digito2;
//     return novoCpf === this.cpfLimpo;
//   };
  
//   ValidaCPF.prototype.criaDigito = function(cpfParcial) {
//     const cpfArray = Array.from(cpfParcial);
  
//     let regressivo = cpfArray.length + 1;
//     const total = cpfArray.reduce((ac, val) => {
//       ac += (regressivo * Number(val));
//       regressivo--;
//       return ac;
//     }, 0);
  
//     const digito = 11 - (total % 11);
//     return digito > 9 ? '0' : String(digito);
//   };
  
//   ValidaCPF.prototype.isSequencia = function() {
//     const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
//     return sequencia === this.cpfLimpo;
//   };
  
//   const cpf = new ValidaCPF('070.987.720-03');
  
//   if(cpf.valida()) {
//     console.log('Cpf válido');
//   } else {
//     console.log('Cpf inválido');
//   }
  