angulo = prompt('Introduzca un angulo');
anguloRadianes = (angulo * Math.PI) / 180;
document.write('El seno del ángulo es ' + Math.sin(anguloRadianes).toFixed(2) + '<br>');
document.write('El coseno del ángulo es ' + Math.cos(anguloRadianes).toFixed(2) + '<br>');
document.write('La tangente del ángulo es ' + Math.tan(anguloRadianes).toFixed(2));