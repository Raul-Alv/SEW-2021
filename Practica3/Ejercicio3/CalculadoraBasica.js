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
                    this.displayValue(a);
                    break;
                }
                case "2":{
                    let a = new Number('2');
                    this.displayValue(a);
                    break;
                }
                case "3":{
                    let a = new Number('3');
                    this.displayValue(a);
                    break;
                }
                case "4":{
                    let a = new Number('4');
                    this.displayValue(a);
                    break;
                }
                case "5":{
                    let a = new Number('5');
                    this.displayValue(a);
                    break;
                }
                case "6":{
                    let a = new Number('6');
                    this.displayValue(a);
                    break;
                }
                case "7":{
                    let a = new Number('7');
                    this.displayValue(a);
                    break;
                }
                case "8":{
                    let a = new Number('8');
                    this.displayValue(a);
                    break;
                }
                case "9":{
                    let a = new Number('9');
                    this.displayValue(a);
                    break;
                }
                case "0":{
                    let a = new Number('0');
                    this.displayValue(a);
                    break;
                }
                case "+":{
                    this.add();
                    break;
                }
                case "-":{
                    this.subtract();
                    break;
                }
                case "*":{
                    this.multiplication();
                    break;
                }
                case "/":{
                    this.division();
                    break;
                }
                case ".":{
                    this.point();
                    break;
                }
                case "Enter":{
                    this.equals();
                    break;
                }
            }
            //event.preventDefault();
        }.bind(this));
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
            document.getElementById("result").value = val;
        }
        else{
            document.getElementById("result").value += val;
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