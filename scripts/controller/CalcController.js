class CalcController {

    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();

    }

    initialize(){
        
        this.setDisplayDateTime();

        //função para atualizar data e hora a cada 1segundo
        setInterval(()=>{
            this.setDisplayDateTime();

        }, 1000);

    }

    //método para que o display apareça assim que inicializado
    setDisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

   

    get displayTime(){
        return this._timeEl.innerHTML;

    }

    set displayTime(value){
        return this._timeEl.innerHTML = value;

    }

    get displayDate(){        
        return this._dateEl.innerHTML;
    }

    set displayDate(value){
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;      
    }
    
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    //retorna data atual
    get currentDate(){
        return new Date();     
    }

    set currentDate(value){
        this._currentDate = value;
    }
}