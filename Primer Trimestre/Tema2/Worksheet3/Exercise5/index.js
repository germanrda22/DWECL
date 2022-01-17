function eliminaRepetidos(cadena) {
    cadena = cadena.split("");
    cadena_aux = '';
    for (let i = 0; i <= cadena.length; i++) {
        for (let j = i + 1; j <= cadena.length; j++) {
            if (cadena[i] === cadena[j]) {
                cadena.splice(i,1);
                cadena.pop(j);
            }
        }
    }
    return cadena.join('');
}
let cadena = prompt('Introduzca una cadena');
document.write(eliminaRepetidos(cadena));