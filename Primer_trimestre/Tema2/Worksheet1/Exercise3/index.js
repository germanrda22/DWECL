// Esta sentencia lleva una función porque la sintaxis es 
//setTimeout(function, milliseconds, param1, param2, ...)

setTimeout(function(){alert('Ya han pasado 60 segundos')}, 60000);



// Opción 1
/*var segundos = 60;
for (let i=segundos, j = 0; i >= 0; i--, j++){
    setTimeout(muestraseg, j * 1000);
}

function muestraseg(){
    document.write(segundos--);
    document.write("<br>");
}*/

// Opción 2
/*setTimeout(muestraseg, 1000);

var segundos = 60;
function muestraseg(){
    document.write(segundos--);
    document.write("<br>");

    if (segundos >= 0){
        setTimeout(muestraseg, 1000);
    }
}*/