function CriaCalculadora(){
    
  
      this.display = document.querySelector('.display'),
      this.btnClear = document.querySelector('.btn-clear'),
        
        this.inicia = function(){
            this.cliqueBotoes(); 
            this.pressionaEnter();
        }
        
        this.clearDisplay= function(){
            this.display.value = '';
        }

        this.pressionaEnter = function(){
            this.display.addEventListener('keypress', e =>{
                if (e.keyCode === 13){
                    this.realizeMath();
                }
            });
        }

        this.DeleteOne = function(){
            this.display.value = this.display.value.slice(0,-1);
        }
        
        this.realizeMath = function(){
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
        }


        this.cliqueBotoes = function(){
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
        }

        this.btnParaDisplay = function(valor){
            this.display.value += valor;
            this.display.focus();
        }

  
}

const calculadora =  new CriaCalculadora();
calculadora.inicia();