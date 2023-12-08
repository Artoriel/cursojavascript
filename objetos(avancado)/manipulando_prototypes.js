// const objA = {
//     chaveA: 'A'
// };

// const objB = {
//     chaveB: 'B'
// };

// Object.setPrototypeOf(objB, objA);
// console.log(objB.chaveA);

function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const p2 = {
    nome: 'Caneca',
    preco: 15
}

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable:true,
        enumerable:true,
        value:99
    },
    tamanho2: {
        writable: true,
        configurable:true,
        enumerable:true,
        value:32
    }
});

p3.aumento(10);
console.log(p3);
Object.setPrototypeOf(p2, Produto.prototype);


const p1 = new Produto('camiseta', 50);
p1.desconto(15);
p2.aumento(25);
console.log(p1.preco);

