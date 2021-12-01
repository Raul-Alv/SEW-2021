class CalculadoraFinanciera{
    constructor(){
        this.prestamo=0;
        this.interes=0.00;
        this.tiempo=0;
        this.capitalVivo=0;
        this.amortizacion=0;
        this.intereses = 0;
        this.renta=0;
        this.pagos=[];
        this.cadena="";
    }

    calculateValues(){
        this.prestamo = parseFloat(document.getElementById("prestamo").value);
        this.interes = parseFloat(document.getElementById("interes").value)/100;
        this.tiempo = parseFloat(document.getElementById("tiempo").value);
        this.renta = (this.prestamo*this.interes)/(1-Math.pow(1+this.interes,-this.tiempo));
        for(var i=0; i<this.tiempo; i++){
            this.intereses = this.capitalVivo*this.interes;
            this.amortizacion = this.renta - this.intereses;
            this.cadena = "Mes " + (i+1) + ": " + this.amortizacion + "€";
            this.capitalVivo = this.capitalVivo - this.amortizacion;
            this.pagos.push(this.cadena);
        }
        this.printValues();
        
    }
      
    /*exports.calculate = calculate();*/

    printValues(){
        document.write("<h2>Resultados</h2>");
        for(var i=0; i<this.pagos.length; i++){
            document.write("<p>" + this.pagos[i] + "</p>");
        }
    }
}

var calc = new CalculadoraFinanciera();