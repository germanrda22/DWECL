a = parseFloat(prompt('Introduzca el valor de x^2'));
b = parseFloat(prompt('Intoduzca el valor de la x'));
c = parseFloat(prompt('Introduzca el valor sin x'));

raiz = Math.sqrt((b ** 2) - (4 * a * c));

ecuacionPositiva = ((-b + raiz)/2 * a);
ecuacionNegativa = ((-b - raiz)/2 * a);

document.write(`El resultado es ${ecuacionPositiva.toFixed(2)} y ${ecuacionNegativa.toFixed(2)}`);