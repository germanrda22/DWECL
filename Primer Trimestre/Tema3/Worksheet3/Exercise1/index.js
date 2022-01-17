/*
Write examples with Arrays to solve the next problems using only Array methods (like iterators, etc...):
*/
let arrNum = [1,2,3,4,5,6,7,8,9,10];

// find largest number
var largestnumber = Math.max.apply(null,arr);
document.write(`El número más grande es ${largestnumber}<br>`);

//find longest string
let arrStr = ['hola', 'adios', 'que tal'];

var longest = arrStr.sort((a,b)=>b.length-a.length)[0];
document.write(`La palabra más larga es ${longest}<br>`)

//find even numbers
pares = []
arrNum.forEach(valor => {
    if (valor % 2 == 0) {
        pares.push(valor);
    }
});
document.write(`La lista de pares es ${pares}<br>`);
//find odd numbers
impares = []
array1.forEach(valor => {
    if (valor % 2 != 0) {
        impares.push(valor);
    }
});
document.write(`La lista de impares es ${impares}<br>`);
//find words that contain 'is'
palabras = ["Paris","parchis","hola","adios","buenas","is"];

palabrascon = [];

palabras.forEach(palabra => {
    if (palabra.includes("is")) {
        palabrascon.push(palabra);
    }
});
document.write(palabrascon);
document.write("<br>");
//assert all numbers are divisible by three
divisibles = []
arrNum.forEach(valor => {
    if (valor % 3 == 0) {
        divisibles.push(valor);
    }
});
document.write(`La lista de números divisibles entre 3 son ${divisibles}<br`);
//zip two arrays together
let zip = arrNum.concat(arrStr);

document.write(`Los arrays juntos son ${zip}<br>`);
//sort joined array from smallest to largest
let sorted = zip.sort((a,b)=>{
    if (a > b)
        return 1;
    else if (a < b)
        return -1;
    else
        return 0;
})
document.write(`La cadena ordenada de mayor a menor es ${sorted}<br>`);
//remove the first word in the array
let newArrStr = arrStr.shift();

document.write(`Sin la primera palabra el array es ${newArrStr}<br>`);
//place a new word at the start of the array
let newArrStr = arrStr.unshift('Linux');

document.write(`Añadiendo la palabra al principio la cadena es ${newArrStr}<br>`);
//replace some elements
let newArrNum = arrNum.splice(2, 2, 18, 20,42);

document.write(`El nuevo array es ${newArrNum}`);