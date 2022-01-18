function sumEveryOther(cadena){
    let total = 0;
    for (num in cadena){
        if (num % 2 === 0){
            total += cadena[num];
        }
    }
    return total
}

cadena = [5, 6, 3, 8, 1]
cadena2 = [10, 2, 11]
document.write(sumEveryOther(cadena) + '<br>');
document.write(sumEveryOther(cadena2));