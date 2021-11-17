class Ejercicio7{
    
    constructor(){
        this.hidden=false;
    }

    ocultar(){
        if(this.hidden==false){
            $(".ocultar").click(function(){$("h2").hide();
                                $(".ocultar").attr("value", "Mostrar titulo");});
            this.hidden = true;
        }
        else{
            $(".ocultar").click(function(){$("h2").show();
                                $(".ocultar").attr("value", "Ocultar titulo");});
            this.hidden = false;
        }
    }

    ejecutar(){
        $(document).ready(function(){
            $("#añadir").click(function(){
                            $("#lorem1").after('<p id="lorem2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>');
                            });
            $("#butElim").click(function(){$("#elim").detach();
                                });
            
            
        });
    }

    recorrer(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

    calcularFila(value, total){
        
            //iterate through each row in the table
            $("tr").each(function () {
                //the value of sum needs to be reset for each row, so it has to be set inside the row loop
                var sum = 0
                //find the combat elements in the current row and sum it 
                $(this).find(value).each(function () {
                    var combat = $(this).text();
                    if (!isNaN(combat) && combat.length !== 0) {
                        sum += parseFloat(combat);
                    }
                });
                //set the value of currents rows sum to the total-combat element in the current row
                $(total, this).html(sum);
            });
        
    }

    calcularColumna(val, total, table){
        var tot = 0;
        table.find("tr").children("td:nth-child(" + columnIndex + ")")
        .each(function() {
            $this = $(this);
            if (!$this.hasId(val) && $this.html() != "") {
                tot += parseInt($this.html());
            }
        });
        $(total, this).html(sum);
    }

    calcularFilas(){
        this.calcularFila(".fila1", ".totalFila1");
        this.calcularFila(".fila2", ".totalFila2");
        this.calcularFila(".fila3", ".totalFila3");
    }

    calcularColumnas(table){
        this.calcularColumna("columna1", ".totalColumna1", table);
        this.calcularColumna("columna2", ".totalColumna2", table);
        this.calcularColumna("columna3", ".totalColumna3", table);
        this.calcularColumna("columna4", ".totalColumna4", table);
    }
}

var ejer = new Ejercicio7();
ejer.ejecutar();