// Produto -> aumento e desconto
// Camiseta = cor, caneca = material

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}


function Camiseta(nome,preco,cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 7.5, 'Preto');
camiseta.aumento(10);
console.log(camiseta);

function Caneca(nome,preco,material,estoque){
    Produto.call(this,nome,preco);
    this.material = material;
   

    Object.defineProperty(this, 'estoque',{
        enumerable:true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;
const caneca = new Caneca('caneca', 13, 'plástico', 5);
caneca.estoque = 10;
console.log(caneca.estoque);

