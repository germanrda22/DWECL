/*
Escribe las funciones para llevar a cabo las siguientes operaciones para un array de una
dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.
*/

function diezACero(arr){
    arr.fill(0);
}

function masUno(arr){
    arr.forEach((element, index) => {
        arr[index] += 1;
    });
}

function valoresEspaciados(arr)
{
    arr.forEach((element, index) =>{
        document.write(arr[index] + ' ');
    });
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write(diezACero(arr));
document.write(masUno(arr));
valoresEspaciados(arr);