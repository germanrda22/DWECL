hermanos = prompt('Indique cuántos hermanos tiene');
cantidad = parseInt(prompt('Introduzca una cantidad'));

if (hermanos >= 3){
    alert('Su cantidad es ' + (cantidad * 0.85))
} else if (1 <= hermanos < 3){
    alert('Su cantidad es ' + (cantidad * 0.95))
} else if (hermanos == 0){
    alert('Su cantidad es ' + cantidad)
}