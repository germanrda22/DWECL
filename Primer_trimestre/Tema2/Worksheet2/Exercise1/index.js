document.write(Math.random() + '<br>');
document.write(((Math.random() * 101) + 100) + '<br>');
valor1 = parseInt(prompt('Introduzca un valor'));
valor2 = parseInt(prompt('Introduzca un otro valor'));
if (valor1 < valor2){
    document.write(Math.random() * (valor2 - valor1) + valor1);
} else if (valor1 > valor2){
    document.write(Math.random() * (valor1 - valor2) + valor2);
}