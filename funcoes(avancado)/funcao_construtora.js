//constroi objetos
//construtora -> Pessoa(new)

function Pessoa(nome,sobrenome){

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(`${this.nome} está falando.`)
    }
}

const p1 = new Pessoa('Artur', 'Oliveira');

p1.metodo();