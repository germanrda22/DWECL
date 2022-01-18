function cuenta(cadena){
    let palabras = cadena.trim().split(' ');
    let contador = 0;

    for (i of palabras){
        contador += 1;
    }
    return contador;
}

let cadena = prompt('Introduzca una cadena');
document.write(cuenta(cadena));