function palindromo(cadena){
    let array = cadena.split("");
    let reverse = array.reverse();

    return cadena == reverse.join("") ? "Si es" : "No es";
}

let cadena = prompt('Introduzca una cadena');
document.write(palindromo(cadena));