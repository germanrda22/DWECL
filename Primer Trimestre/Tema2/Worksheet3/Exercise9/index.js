function cuadrado(cadena){
    document.write('<table>');
    document.write('<tr>');
    for (let i = 0; i < cadena.length; i++){
        document.write(`<td>${cadena[i]}</td>`);
    } //Fila 0 de la tabla
    document.write('</tr> <br>');
    for (let i = 1; i < cadena.length - 1; i++){
        document.write('<tr>');
        document.write(`<td>${cadena[i]}</td>`); //Escribir primer carácter de la fila
        for (let j = 2; j < cadena.length; j++){
            document.write('<td>&nbsp;&nbsp;&nbsp;</td>'); //Escribir espacios en blanco
        }
        document.write(`<td>${cadena[cadena.length - i - 1]}</td>`) //Escribir último carácter de la fila
        document.write('</tr>');
    } //Filas i = 1 - i = length - 1
    document.write('<br>');
    document.write('<tr>');
    for (let i = cadena.length - 1; i >= 0; i--){ //bucle for inverso
        document.write(`<td>${cadena[i]}</td>`);
    } //Última fila de la tabla
    document.write('</tr>');
    document.write('</table>');
}

let cadena = prompt('Introduzca una cadena');
cuadrado(cadena);