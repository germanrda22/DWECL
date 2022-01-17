numero = parseFloat(prompt('Introduzca un número'));

if (numero % 2 == 0){
    valor = 'Par'
} else if (numero % 3 == 0){
    valor = 'Tres'
} else if (numero % 5 == 0){
    valor = 'Cinco'
} else {
    valor = null
}

switch (valor){
    case 'Par':
        alert('El número es par');
        break;
    case 'Tres':
        alert('El número es múltiplo de 3');
        break;
    case 'Cinco':
        alert('El número es múltiplo de 5');
        break;
    default:
        alert('El número no es par ni múltiplo de 3 o 5')
}