window.onload=()=>{
    document.getElementById("crearLi").addEventListener("click", crearLi);
}

function crearLi(){
    let nuevoLi = document.createElement("li");
    let texto = document.getElementById("textoLi").value;
    document.getElementById("textoLi").value = "";
    nuevoLi.innerHTML = texto;
    document.getElementById("lista").appendChild(nuevoLi);
}