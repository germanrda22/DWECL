/*
Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de
dos dados. El script debe simular el lanzamiento (aleatorio) de ambos dados. La suma de los
dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, siendo éstos los
valores menos frecuentes así como 7 el más frecuente). Haz una simulación con 36.000
lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.
*/
function tirada(){
    a = [Math.round(Math.random() * 5 + 1), Math.round(Math.random() * 5 + 1)];
    return a;
}
/*
tiradas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (i = 0; i < 36000; i++){
    tirar = tirada().reduce((total, tira)=> total += tira);
    if (tirar == 2)
        tiradas[0] += 1;
    else if (tirar == 3)
        tiradas[1] += 1;
    else if (tirar == 4)
        tiradas[2] += 1;
    else if (tirar == 5)
        tiradas[3] += 1;
    else if (tirar == 6)
        tiradas[4] += 1;
    else if (tirar == 7)
        tiradas[5] += 1;
    else if (tirar == 8)
        tiradas[6] += 1;
    else if (tirar == 9)
        tiradas[7] += 1;
    else if (tirar == 10)
        tiradas[8] += 1;
    else if (tirar == 11)
        tiradas[9] += 1;
    else if (tirar ==12)
        tiradas[10] += 1;
    
}


tiradas.forEach((element) => {
    document.write(`${element} <br>`);
});
*/
dos = 0;
tres = 0;
cuatro = 0;
cinco = 0;
seis = 0;
siete = 0;
ocho = 0;
nueve = 0;
diez = 0;
once = 0;
doce = 0;


for (i = 0; i <= 36000; i++) {
    // Contadores

    dado1 = tirada();
    dado2 = tirada();
    suma_dados = dado1 + dado2; // Tiro dos dados y los sumo

    if (suma_dados == 2) {
        dos++;
    } else if (suma_dados == 3) {
        tres++;
    } else if (suma_dados == 4) {
        cuatro++;
    } else if (suma_dados == 5) {
        cinco++;
    } else if (suma_dados == 6) {
        seis++;
    } else if (suma_dados == 7) {
        siete++;
    } else if (suma_dados == 8) {
        ocho++;
    } else if (suma_dados == 9) {
        nueve++;
    } else if (suma_dados == 10) {
        diez++;
    } else if (suma_dados == 11) {
        once++;
    } else if (suma_dados == 12) {
        doce++;
    }

};

document.write(`2: ${dos}<br>3: ${tres}<br>4: ${cuatro}<br>5: ${cinco}
<br>6: ${seis}<br>7: ${siete}<br>8: ${ocho}<br>9: ${nueve}
<br>10: ${diez}<br>11: ${once}<br>12: ${doce}`);