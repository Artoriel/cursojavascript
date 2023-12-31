function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true, 
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Valor inválido');
            }

            estoquePrivado = valor;
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 'z';
console.log(p1.estoque);