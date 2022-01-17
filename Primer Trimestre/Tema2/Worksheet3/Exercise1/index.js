var cad_arg = prompt('Introduzca la cadena');
//var i = parseInt(prompt('Introduzca la longitud mínima'))

function invierteCadena(cad_arg){
    /*Esta función coge un string y devuelve el string 
    invirtiendo la posición de sus palabras*/
    let new_cadena = ""
    for (letras of cad_arg){
        new_cadena = letras + new_cadena;
    }
    return new_cadena;
}

function inviertePalabras(cad_arg){
    /*Esta función toma una cadena y cambia la posición 
    de las letras de cada palabra*/
    let cadena_array = cad_arg.split(' ');
    let new_cadena = "";
    for (palabra of cadena_array){
        let new_palabra = "";
        for (letra of palabra){
            new_palabra = letra + new_palabra;
        }
        new_cadena += new_palabra ;
    }
    return new_cadena;
}

function encuentraPalabraMasLarga(cad_arg){
    /*Esta función encuentra la palabra más larga de una cadena y devuelve su longitud*/
    let arrayPalabras = cad_arg.split(' ');
    let cuentaLetras = 0;
    let palabraMasLarga = '';
    for (palabra of arrayPalabras){
        if (palabra.length > palabraMasLarga.length){
            palabraMasLarga = palabra;
        }
    }
    return palabraMasLarga.length;
}

function filtraPalabrasMasLargas(cad_arg, i){
    /*Esta función coge una cadena y un valor de minimas letras para la palabra
    y devuelve cuántas palabras tienen más de ese número de letras*/
    let contador = 0;
    let contadorPalabras = 0;
    let newCad = cad_arg.split(' ');
    for (palabra of newCad){
        contador = palabra.length;
        if (contador > i){
            contadorPalabras++;
        }
    }
    return `Hay ${contadorPalabras} con una longitud mayor a ${i}`;
}

function cadenaBienFormada(cad_arg){
    let newCad = cad_arg.slice(1);
    return cad_arg.chartAt(0).toUpperCase()+newCad.toLowerCase();
}


//document.write(invierteCadena(cad_arg));
//document.write(inviertePalabras(cad_arg));
//document.write(encuentraPalabraMasLarga(cad_arg));
//document.write(filtraPalabrasMasLargas(cad_arg, i));
//document.write(cadenaBienFormada(cad_arg));