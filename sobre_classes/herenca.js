class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado`);
            return;
        }

        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado`);
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome);
        
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, temwifi){
        super(nome);
        this.temwifi = temwifi;
    }

    ligar(){
        console.log('Alterou o metodo ligar');
    }
}

const s1 = new Smartphone('Samsung', 'preto', 'Galaxy S10');
console.log(s1);
const t1 = new Tablet('Ipad', true);
t1.ligar();
const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.desligar();
console.log(d1);