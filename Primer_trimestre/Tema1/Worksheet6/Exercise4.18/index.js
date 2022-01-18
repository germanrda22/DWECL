columna = parseInt(prompt('Introduzca el número de columnas'));
filas = parseInt(prompt('Introduce el número de filas'));
alto = parseInt(prompt('Introduzca el alto'));
ancho = parseInt(prompt('Introduzca el ancho'));

document.write('<table border="0" cellspacing="2" bgcolor="black">');

for (j = 0; j < filas; j++){
    document.write('<tr bgcolor="white" height="' + alto + '">');
    for (i = 0; i < columna; i++){
        document.write('<td width="' + ancho + '">&nbsp;</td>');
    }
    document.write('</tr>');
}

document.write('</table>');