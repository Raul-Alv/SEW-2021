class CalculadoraBasica{

    constructor(){
        this.mem = 0;
        //this.display = '';
        let result = document.getElementById("result")
        let operation='';
        document.addEventListener('keydown', function(event) {
            switch (event.key){
                case "1":{
                    let a = new Number('1');
                    document.getElementById("result").value += a.toString();
                    break;
                }
                case "2":{
                    let a = new Number('2');
                    document.getElementById("result").value += a.toString();
                    break;
                }
                case "3":{
                    let a = new Number('3');
                    document.getElementById("result").value += a.toString();
                    break;
                }
                case "4":{
                    let a = new Number('4');
                    document.getElementById("result").value += a.toString();
                    break;
                }
                case "5":{
                    let a = new Number('5');
                    document.getElementById("result").value += a.toString();
                    break;
                }
                case "6":{
                    let a = new Number('6');
                    document.getElementById("result").value += a.toString();
                    break;
                }
                case "7":{
                    let a = new Number('7');
                    document.getElementById("result").value += a.toString();
                    break;
                }
                case "8":{
                    let a = new Number('8');
                    document.getElementById("result").value += a.toString();
                    break;
                }
                case "9":{
                    let a = new Number('9');
                    document.getElementById("result").value += a.toString();
                    break;
                }
                case "0":{
                    let a = new Number('0');
                    document.getElementById("result").value += a.toString();
                    break;
                }
                case "+":{
                    document.getElementById("result").value += '+';
                    break;
                }
                case "-":{
                    document.getElementById("result").value += '-';
                    break;
                }
                case "*":{
                    document.getElementById("result").value += '*';
                    break;
                }
                case "/":{
                    document.getElementById("result").value += '/';
                    break;
                }
                case ".":{
                    document.getElementById("result").value += '.';
                    break;
                }
            }
            //event.preventDefault();
        });
    }

    
    digits(number){
        
        let a = new Number(number);
        this.displayValue(a);
    }

    point(){
        this.displayValue('.');
    }

    add(){
        this.displayValue('+');
    }

    subtract(){
        this.displayValue('-');
    }

    multiplication(){
        this.displayValue('*');
    }

    division(){
        this.displayValue('/');
    }
    
    displayValue(val) {
        if(document.getElementById("result").value == ''){
            document.getElementById("result").value = val.toString();
        }
        else{
            document.getElementById("result").value += val.toString();
        }
    }

    equals(){
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