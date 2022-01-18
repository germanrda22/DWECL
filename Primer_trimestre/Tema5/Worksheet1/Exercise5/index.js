window.onload=()=>{
    document.getElementById("otro").addEventListener("click", nuevoInp);
}

function nuevoInp(){
    let nuevoInp = document.createElement("input");
    nuevoInp.type = "file";
    document.getElementById("input").appendChild(nuevoInp);
    document.getElementById("input").appendChild(document.createElement('br'));
}