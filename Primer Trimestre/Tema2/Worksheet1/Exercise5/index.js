setTimeout(reloj, 1000);

function reloj(){
    let hora = new Date();
    document.body.innerHTML = `${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}<br>`;

    setTimeout(reloj, 1000);
}