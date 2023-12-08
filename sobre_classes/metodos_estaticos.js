class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //metodo de instancia
    aumentaVolume(){
        this.volume += 2;
    }
    diminuiVolume(){
        thiis.volume -=2;
    }
    //metodo estatico
    static trocaPilha(){
        console.log('Trocando')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentaVolume();
ControleRemoto.trocaPilha();
console.log(controle1);