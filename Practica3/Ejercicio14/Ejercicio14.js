class Ejercicio14{

    pintar(){
        var canvas = document.getElementById('canvas');
        var canvas1 = canvas.getContext('2d');
        canvas1.strokeStyle = "rgba(0, 0, 255, 1)";
        canvas1.beginPath();
        canvas1.moveTo(275, 125);
        canvas1.quadraticCurveTo(225, 63, 300, 335);
        canvas1.quadraticCurveTo(260, 200, 265, 200);
        canvas1.quadraticCurveTo(99, 21, 325, 162);
        canvas1.quadraticCurveTo(325, 125, 2, 55);
        canvas1.closePath();
        canvas1.stroke();

    }

    añadir(){
        history.pushState({pagina: 1}, "Get sitck bugged lol", "state.html#añadir");
    }
    fullScreen(){
        var elem = document.getElementById("myvideo");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
    }
    
    }
}

var ejer = new Ejercicio14();