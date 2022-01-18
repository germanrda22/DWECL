numero1 = parseFloat(prompt('Introduzca un número'));
numero2 = parseFloat(prompt('Introduzca otro número'));
operacion = prompt('Introduzca la operación +, -, *, /');

switch (operacion){
    case '+':
        alert(numero1 + numero2);
        break;
    case '-':
        alert(numero1 - numero2);
        break;
    case '*':
        alert(numero1 * numero2);
        break;
    case '/':
        alert(numero1 / numero2);
        break;
    default:
        alert('La operación no es válida');
}