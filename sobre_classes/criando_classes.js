class Pessoa {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome= sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);

    }
}

function Pessoa2(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = () => {
    console.log(`${this.nome} está falando`);
};

const p1 = new Pessoa('Artur', 'smaniotto');
p1.falar();
