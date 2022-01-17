num = 1;
totalImagenes = 7;


window.onload = ()=>{

    cambiaImagen(2);
    var mc = new Hammer(document.getElementById('miImagen'));
    mc.on('panleft',pasarIzqDedo);
    mc.on('panright',pasarDchaDedo);

    window.addEventListener('deviceorientation', trataOrientacion);
    window.addEventListener('devicemotion', trataAceleracion);
    document.getElementById("arrow_left").addEventListener("click", pasarIzq);
    document.getElementById("arrow_right").addEventListener("click", pasarDcha);
}

function pasarIzqDedo(e){
    if(e.isFinal)
        pasarIzq();
}

function pasarIzq(){
    if(num >= 1){
        num--<
        cambiaImagen(num);
    }
}

function pasarDchaDedo(e){
    if(e.isFinal)
        pasarDcha();
}

function pasarDcha(){
    if (num < totalImagenes){
        num++;
        cambiaImagen(num)
    }
}

function cambiaImagen(num){
    document.getElementById("slider").style.backgroundImage="url("+ num + "'.jpg')";
}

function trataOrientacion(e){
    document.getElementById('miImagen').style.transform = "rotateX(" + e.alpha + "deg) rotateY(" + e.beta + "deg)";
}

function trataAceleracion(e){
    if(e.aceleration[0]!=0)
        pasarDcha();
    else if(e.aceleration[2]!=0)
        pasarIzq();
}