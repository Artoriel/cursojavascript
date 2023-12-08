function criaCalculadora(){
    
    return{
      display: document.querySelector('.display'),
      btnClear: document.querySelector('.btn-clear'),
        
        inicia(){
            this.cliqueBotoes(); 
            this.pressionaEnter();
        },
        
        clearDisplay(){
            this.display.value = '';
        },

        pressionaEnter(){
            this.display.addEventListener('keypress', e =>{
                if (e.keyCode === 13){
                    this.realizeMath();
                }
            });
        },

        DeleteOne(){
            this.display.value = this.display.value.slice(0,-1);
        },
        
        realizeMath(){
            let conta = this.display.value;
            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            }catch(e){
                alert('Conta inválida');
                return;
            }
        },


        cliqueBotoes(){
            //this -> calculadora
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.DeleteOne();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizeMath();
                }
                
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
            this.display.focus();
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();