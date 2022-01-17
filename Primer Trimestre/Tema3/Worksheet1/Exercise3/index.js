function lanzamiento(){
    return Math.round(Math.random() * 5 + 1);
}

function tiradas(){
    tiradas = [];
    for (i = 0; i < 6000; i++){
        tiradas.push(lanzamiento())
    }
    return tiradas;
}

function compruebaTiradas(arr){
    con1 = 0;
    con2 = 0;
    con3 = 0;
    con4 = 0;
    con5 = 0;
    con6 = 0;
    
    for (num of arr){
        if (num == 1){
            con1 += 1;
        } else if (num == 2){
            con2 += 1;
        } else if (num == 3){
            con3 += 1;
        } else if (num == 4){
            con4 += 1;
        } else if (num == 5){
            con5 += 1;
        } else {
            con6 += 1;
        }
    }
    return `Hay ${con1} unos, ${con2} doses, ${con3} treses, ${con4} cuatros, ${con5} cincos y ${con6} seis`;
}

document.write(compruebaTiradas(tiradas()));