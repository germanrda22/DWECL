edad = parseInt(prompt('Introduzca su edad'));

if (edad < 6){
    alert('Debes estar en el jardín de infancia')
} else if (6 <= edad < 12){
    alert('Debes estar en primaria')
} else if (12 <= edad < 17){
    alert('Debes estar en secundaria')
} else if (17 <= edad < 21){
    alert('Debes estar en bachillerato o ciclos')
} else if (edad >= 21){
    alert('Debes estar en la universidad')
}