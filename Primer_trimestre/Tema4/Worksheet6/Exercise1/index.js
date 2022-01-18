window.onload=()=>{
    document.getElementById("inicio").addEventListener("click",inicioSesion);
    document.getElementById("cerrar").addEventListener("click",cerrarSesion);
    if(!document.cookie){
        document.write(`Hola ${document.coockie}`);
    }
}

function inicioSesion(){
    let usuario = document.getElementById("usuario").value;
    document.cookie = `usuario-${usuario}; max-age=5*60`;
}

function cerrarSesion(){
    document.write(`Hola ${document.cookie}`);
    document.cookie = `usuario-${usuario}; max-age=0;`;
}