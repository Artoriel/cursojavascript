function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configuravel
    });

    Object.defineProperties(this, {
        nome: {
        enumerable: true, 
        value: estoque, 
        writable: true, 
        configurable: true
        },
        
        preco: {
        enumerable: true, 
        value: estoque, 
        writable: true, 
        configurable: true
        },
        
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 100;
console.log(p1);
console.log(Object.keys(p1));