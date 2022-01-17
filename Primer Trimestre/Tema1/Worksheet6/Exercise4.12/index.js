columna = parseInt(prompt('Introduzca el número de columnas'));
alto = parseInt(prompt('Introduzca el alto'));
ancho = parseInt(prompt('Introduzca el ancho'));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="' + alto + '">');

for (i = 0; i < columna; i++){
    if (i % 2 == 0){
        document.write('<td width="' + ancho + '" bgcolor="black">&nbsp;</td>');
    } else {
        document.write('<td width="' + ancho + '" bgcolor="white">&nbsp;</td>');
    }
    
}

document.write('</tr>');
document.write('</table>');