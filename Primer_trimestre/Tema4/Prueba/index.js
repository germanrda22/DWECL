num = 1;
document.getElementById("miImagen").src=num + ".jpg";

pasarImagen = document.getElementById("alante");
retrocederImagen = document.getElementById("atras");

if (num == 1){
    document.getElementById("atras").style.display="None";
}else if (num == 6){
    document.getElementById("alante").style.display="None";
}

function pasarFoto(){
    if (num == 6){
        document.getElementById("alante").style.display="None";
    }else{
        document.getElementById("atras").style.display="Block"
        document.getElementById("alante").style.display="Block";
    }
    
    num ++;
    document.getElementById("miImagen").src=num + ".jpg";
}

function retrocederFoto(){
    if (num == 2){
        document.getElementById("atras").style.display="None";
    }else{
        document.getElementById("atras").style.display="Block"
        document.getElementById("alante").style.display="Block";
    }
    num --;
    document.getElementById("miImagen").src=num + ".jpg";
}

pasarImagen.addEventListener('click', pasarFoto);
retrocederImagen.addEventListener('click', retrocederFoto);