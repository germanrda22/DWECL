function maximo(num1, num2, num3, num4){
    max = num1;
    nums = [num2, num3, num4];
    for (i of nums){
        if (i > max){
            max = i;
        }
    }
    return max;
}

var num1 = parseInt(prompt("Introduzca un número"));
var num2 = parseInt(prompt("Introduzca otro número"));
var num3 = parseInt(prompt("Introduzca otro número"));
var num4 = parseInt(prompt("Introduzca otro número"));

document.write(maximo(num1, num2, num3, num4));