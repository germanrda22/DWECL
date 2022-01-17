function random(min, max){
    /*Esta funcion nos devuelve un numero aleatorio entre el
    minimo y el máximo introducido*/
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

export {random}