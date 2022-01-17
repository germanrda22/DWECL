examen1 = parseFloat(prompt('Introduzca la nota del primer examen'));
examen2 = parseFloat(prompt('Introduzca la nota del segundo examen'));
trabajo1 = parseFloat(prompt('Introduzca la nota del primer trabajo'));
trabajo2 = parseFloat(prompt('Introduzca la nota del segundo trabajo'));

if ((examen1 >= 4.5) && (examen2 >= 4.5) && (trabajo1 >= 4.5) && (trabajo2 >= 4.5)){
    mediaE = (examen1 + examen2) / 2;
    mediaT = (trabajo1 + trabajo2) / 2;
    media = (mediaE * 0.75) + (mediaT * 0.25)
    if (media >= 5){
        alert('Aprobado')
    } else if (media < 5){
        alert('Suspenso')
    }
} else {
    alert('Suspenso')
}