class CalculadoraRPN{
    
    constructor(){
        this.stack = [];
        this.result = "";
        this.counter = 0;
        this.memory=0;
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
                    this.raiseValue();
                    break;
                }
            }
            
        }.bind(this));
    }

    displayValue(num){
        this.result += num;
        document.getElementById("result").value += num;
    }

    raiseValue(){
        if(!(document.getElementById("result").value == "")){
            this.stack.push(parseFloat(this.result));
            document.getElementById("result").value = "";
            //document.getElementById("queue").value += this.stack[0] + "\n";
            //this.counter++;
            //document.getElementById("queue").value += this.counter + ". " + this.result + "\r\n";
            this.loadQueue();
            this.result="";
        }
    }

    add(){
        if(this.stack.length >= 2){
            var op2 = this.stack.pop();
            this.counter--;

            var op1 = this.stack.pop();
            this.counter--;

            this.result = op1+op2;
            this.stack.push(this.result);
        
            //document.getElementById("queue").value += this.counter + ". " + this.result + "\r\n";
            this.loadQueue();
            this.result = "";
        }
    }

    subtract(){
        if(this.stack.length >= 2){
            var op2 = this.stack.pop();
            this.counter--;

            var op1 = this.stack.pop();
            this.counter--;

            this.result = op1-op2;
            this.stack.push(this.result);

            //document.getElementById("queue").value += this.counter + ". " + this.result + "\r\n";
            this.loadQueue();
            this.result = "";
        }
    }

    divide(){
        if(this.stack.length >= 2){
            var op2 = this.stack.pop();
            this.counter--;

            var op1 = this.stack.pop();
            this.counter--;

            this.result = op1/op2;
            this.stack.push(this.result);
            
            //document.getElementById("queue").value += this.counter + ". " + this.result + "\r\n";
            this.loadQueue();
            this.result = "";
        }
    }

    multiply(){
        if(this.stack.length >= 2){
            var op2 = this.stack.pop();
            this.counter--;

            var op1 = this.stack.pop();
            this.counter--;

            this.result = op1*op2;
            this.stack.push(this.result);
            
            //document.getElementById("queue").value += this.counter + ". " + this.result + "\r\n";
            this.loadQueue();
            this.result = "";
        }
    }

    sin(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.counter--;

            this.result = Math.sin(op1);
            this.stack.push(this.result);
            
            //document.getElementById("queue").value += this.counter + ". " + this.result + "\r\n";
            this.loadQueue();
            this.result = "";
        }
    }

    cos(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.counter--;

            this.result = Math.cos(op1);
            this.stack.push(this.result);
            
            //document.getElementById("queue").value += this.counter + ". " + this.result + "\r\n";
            this.loadQueue();
            this.result = "";
        }
    }

    tan(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.counter--;

            this.result = Math.tan(op1);
            this.stack.push(this.result);
            
            //document.getElementById("queue").value += this.counter + ". " + this.result + "\r\n";
            this.loadQueue();
            this.result = "";
        }
    }

    acos(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.counter--;

            this.result = Math.acos(op1);
            this.stack.push(this.result);
            
            //document.getElementById("queue").value += this.counter + ". " + this.result + "\r\n";
            this.loadQueue();
            this.result = "";
        }
    }

    asin(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.counter--;

            this.result = Math.asin(op1);
            this.stack.push(this.result);
            
            //document.getElementById("queue").value += this.counter + ". " + this.result + "\r\n";
            this.loadQueue();
            this.result = "";
        }
    }

    atan(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();
            this.counter--;

            this.result = Math.atan(op1);
            this.stack.push(this.result);
            
            //document.getElementById("queue").value += this.counter + ". " + this.result + "\r\n";
            this.loadQueue();
            this.result = "";
        }
    }

    addMemory(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();

            this.memory += op1;
        }
    }

    subMemory(){
        if(this.stack.length >= 1){
            var op1 = this.stack.pop();

            this.memory -= op1;
        }
    }

    clearMemory(){
        this.memory=0;
    }

    showMemory(){
        this.result=this.memory;
        document.getElementById("result").value = this.memory;
    }

    loadQueue(){
        this.counter=1;
        var cadena="";
        for(var i in this.stack){
            cadena += this.counter + ". " + this.stack[i] + "\r\n";
            this.counter++;
        }
        document.getElementById("queue").value = cadena;
    }

    clear(){
        this.stack = [];
        this.result = "";
        this.counter = 0;
        this.memory=0;
        document.getElementById("queue").value = "";
        document.getElementById("result").value = "";
    }

}

var calc = new CalculadoraRPN();