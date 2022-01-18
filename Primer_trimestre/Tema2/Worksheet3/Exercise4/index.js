function consonantesVocales(cadena) {
    let cadena = cadena.split("");
    let vocales = [];
    let consonantes = [];

    for (i = 0; i <= cadena.length; i++) {
        if (cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' || cadena[i] == 'o' || cadena[i] == 'u') {

            vocales.push(cadena[i]);
        }
        else {
            consonantes.push(cadena[i]);
        }
    }
    return consonantes.concat(vocales);

}

let cadena = prompt('Introduzca una cadena');
document.write(consonantesVocales(cadena));