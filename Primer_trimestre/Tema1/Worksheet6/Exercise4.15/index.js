num_adivinar = parseInt(prompt('Jugador 1 introduca un número por teclado'));
num = parseInt(prompt('Intente adivinar el número'));

while (num_adivinar != num){
    if (num_adivinar < num){
        alert('El número introducido es mayor')
    } else if (num_adivinar > num){
        alert('El número introducido es menor')
    }
    num = parseInt(prompt('Intente adivinar el número'));
}

alert('Has acertado');