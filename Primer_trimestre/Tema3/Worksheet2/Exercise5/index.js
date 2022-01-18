/*
Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1
al 1000. Una vez creado, mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a mostrar el array
*/

function paresImpares(){
    var a = [];
    for (i = 0; i < 100; i++){
        a.push(Math.round(Math.random() * 999 + 1));
    }
    pares = a.filter(function(numero){ return numero % 2 == 0});
    impares = a.filter(function(numero){return numero % 2 != 0});
    arrParesImpares = pares.concat(impares);
    arrParesImpares.sort((a, b) => a - b);
    return arrParesImpares;
}

console.log(paresImpares());