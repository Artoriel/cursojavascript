function Pessoa(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

const p1 = new Pessoa('Artur', 'Oliveira');
const p2 = new Pessoa('Carlos', 'Silva');

console.log(p1.nomeCompleto());
