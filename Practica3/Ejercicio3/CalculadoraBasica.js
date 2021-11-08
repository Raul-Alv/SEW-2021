class CalculadoraBasica{

    constructor(){
        this.mem = 0;
    }
    

    displayValue(val) {
        if(document.getElementById("result").value == ''){
            document.getElementById("result").value = val;
        }
        else{
            document.getElementById("result").value += val;
        }
    }

    calculateResult(){
        var resultadoFinal = eval(document.getElementById("result").value);
        document.getElementById("result").value = resultadoFinal;

    }

    mPlus(val){
        this.mem += parseInt(val);
        
    }

    mMinus(val){
        if(this.mem > val){
            this.mem -= parseFloat(val);
        }
        else{
            this.mem = 0;
        }
    }

    mRecall(){
        document.getElementById("result").value = this.mem;
    }

    clearAll(){
        document.getElementById("result").value = '';

    }
}

var calc = new CalculadoraBasica();