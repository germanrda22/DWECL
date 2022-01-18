aa = parseInt(prompt('Introduzca el alto y ancho que tendrán las celdas'));

document.write('<table border="0" cellspacing="2" bgcolor="black">');

for (j = 1; j <= 8; j++){
    if (j % 2 == 0){
        document.write('<tr height="' + aa + '">');
        for (i = 1; i <= 8; i++){
            if (i % 2 == 0){
                document.write('<td width="' + aa + '" bgcolor="black">&nbsp</td>');
            } else {
                document.write('<td width="' + aa + '" bgcolor="white">&nbsp</td>');
            }
        }
        document.write('</tr>');
    } else {
        document.write('<tr height="' + aa + '">');
        for (i = 1; i <= 8; i++){
            if (i % 2 == 0){
                document.write('<td width="' + aa + '" bgcolor="white">&nbsp</td>');
            } else {
                document.write('<td width="' + aa + '" bgcolor="black">&nbsp</td>');
            }
        }
        document.write('</tr>');
    }
}

document.write('</table>');