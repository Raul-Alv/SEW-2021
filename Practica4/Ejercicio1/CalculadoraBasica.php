<?php
class CalculadoraBasica(){
    $resultado = "";

    public function displayValue(a){
        $this->resultado += a;
    }
}

if (count($_POST)>0) 
    {   
        $calc = new CalculadoraBasica();

        if(isset($_POST['one'])) $calc->displayValue("1");
    }

echo "
    <h1>Calculadora Básica</h1>
        <form name="calculadora" id="container" method="post">
            <input title="result" type="text" class="result" name = "result" id="result" value="$result" disabled>
            
            <input type="button" class="memory" name="show" value="mrc" onclick="calc.mRecall()">
            <input type="button" class="memory" name="addmem" value="m+" onclick="calc.mPlus(document.getElementById('result').value)">
            <input type="button" class="memory" name="removemem" value="m-" onclick="calc.mMinus(result.value)">
            <input type="button" class="operator" name = "division" value="/" 
                onclick="calc.division()">
        
            <input type="button" class="numbers" name = "seven" value="7" onclick="calc.digits('7')">
            <input type="button" class="numbers" name = "eight" value="8" onclick="calc.digits('8')">
            <input type="button" class="numbers" name = "nine" value="9" onclick="calc.digits('9')">
            <input type="button" class="operator" name = "multiplication" value="*" 
                onclick="calc.multiplication()">
        
            <input type="button" class="numbers" name = "four" value="4" onclick="calc.digits('4')">
            <input type="button" class="numbers" name = "five" value="5" onclick="calc.digits('5')">
            <input type="button" class="numbers" name = "six" value="6" onclick="calc.digits('6')">
            <input type="button" class="operator" name = "minus" value="-" 
                onclick="calc.subtract()">
        
            <input type="button" class="numbers" name = "one" value="1">
            <input type="button" class="numbers" name = "two" value="2" onclick="calc.digits('2')">
            <input type="button" class="numbers" name = "three" value="3" onclick="calc.digits('3')">
            <input type="button" class="operator" name = "sum" value="+" 
                onclick="calc.add()">
        
            <input type="button" class="numbers" name = "zero" value="0" onclick="calc.digits('0')">
            <input type="button" class="numbers" name = "dot" value="." onclick="calc.displayValue('.')">
            <input type="button" class="operator" name = "clear" value="C" onclick="calc.clearAll()">
            <input type="button" class="operator" name = "equals" value="=" 
                onclick="calc.equals()">
        </form>
";
?>