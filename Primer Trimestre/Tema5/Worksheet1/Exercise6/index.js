window.onload = ()=>{
    document.getElementById("atras").addEventListener("click", atras);
    document.getElementById("alante").addEventListener("click", alante);
    if (num == 1){
        document.getElementById("atras").style.display="None";
    }else if (num == 3){
        document.getElementById("alante").style.display="None";
    }else{
        document.getElementById("alante").style.display="Block";
        document.getElementById("atras").style.display="Block";
    }
}

var num = 1;

function atras(){
    num --;
    document.getElementById("miImagen").setAttribute("src", `${num}.jpg`);
}

function alante(){
    num ++;
    document.getElementById("miImagen").setAttribute("src", `${num}.jpg`);
}