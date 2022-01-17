// Crear array con 10números y ordenarlos de creciente a decreciente
var a = [];
for (i = 0; i < 10; i++){
    a.push(Math.random() * 100 + 1);
}
a.sort((a, b)=> a - b);