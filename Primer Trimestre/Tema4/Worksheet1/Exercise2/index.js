x = null;
y = null;

function position(event){
    document.write(`Eje X: ${event.pageX}<br> Eje Y: ${event.pageY}`);
}

window.upload('mousemove', position, false);