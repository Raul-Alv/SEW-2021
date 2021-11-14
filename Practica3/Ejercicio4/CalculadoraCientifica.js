class CalculadoraCientifica extends CalculadoraBasica{
    constructor(val){
        super(val);
    }

    square(){
        var power = Math.pow(eval(document.getElementById("result").value), 2);
        document.getElementById("result").value = power;
    }

    power(){
        document.getElementById("result").value += "**";
    }

    sin(){
        var sin = Math.sin(eval(document.getElementById("result").value));
        document.getElementById("result").value += sin;
    }

    cos(){
        var cos = Math.cos(eval(document.getElementById("result").value));
        document.getElementById("result").value += cos;
    }

    tan(){
        var tan = Math.tan(eval(document.getElementById("result").value));
        document.getElementById("result").value += tan;
    }

    root(){
        var raiz = Math.sqrt(eval(document.getElementById("result").value));
        document.getElementById("result").value += raiz;
    }

    power10(){
        document.getElementById("result").value += "10**";
    }

    log(){
        var log = Math.log10(eval(document.getElementById("result").value));
        document.getElementById("result").value = log;
    }

    exp(){
        var ln = Math.log(eval(document.getElementById("result").value));
        document.getElementById("result").value = ln;
    }

    mod(){
        document.getElementById("result").value += "%";
    }

    clearOne(){
        var value = document.getElementById("result").value;
        var a = value.substr(0, value.length - 1);
        document.getElementById("result").value = a;
    }

    deleteNumber(){
        var value = document.getElementById("result").value;
    }

    pi(){
        let a =Math.pi;
        this.displayValue(pi);
    }

    factorial(){
        var numb = parseInt(eval(document.getElementById("result").value));
        var fact = 1;
        for(var i= 1; i <= numb; i++){
            fact = fact * i;
        }
        document.getElementById("result").value = fact;
    }

    masMenos(){

    }

    abrirParentesis(){

    }

    cerrarParentesis(){

    }
}

var calc = new CalculadoraCientifica();