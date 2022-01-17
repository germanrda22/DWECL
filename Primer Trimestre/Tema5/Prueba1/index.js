window.onload=()=>{
    document.getElementById("crear").addEventListener("click",crearCookie);
    document.getElementById("borrar").addEventListener("click",borrarCookie);
    document.getElementById("mostrar").addEventListener("click",mostrarCookie);

    document.getElementById("crearImagen").addEventListener("click", crearImagen);
    document.getElementById("crearLi").addEventListener("click", crearLi);

    document.getElementById("lista").children[0].addEventListener("click", borraEntrada);
    document.getElementById("lista").children[1].addEventListener("click", borraEntrada);
}

function crearImagen(){
    let imagenNueva = document.createElement("img");
    imagenNueva.src = 'https://indiehoy.com/wp-content/uploads/2021/05/the-mitchells-vs-the-machine.jpg';
    imagenNueva.style.border = '1px splid black';
    imagenNueva.addEventListener("click", borraImg);
    document.body.appendChild(imagenNueva);
}

function borraImg(event){
    document.body.removeChild(event.target);
}

function crearLi(){
    let nuevoLi = document.createElement("li");
    let texto = document.getElementById("textoLi").value;
    document.getElementById("textoLi").value = "";
    nuevoLi.innerHTML = texto;
    nuevoLi.addEventListener("click", borraEntrada);
    nuevoLi.id + "entrada"+numero;
    ++numeroLi;
    document.getElementById("lista").appendChild(nuevoLi);
}

var numeroLi = 1;

function borraEntrada(e){
    document.getElementById("lista").removeChild(e.target);
}

function crearCookie(){
    document.cookie = "usuario-german;";
}

function borrarCookie(){
    document.cookie = "usuario-german; max-age=0;"
}

function mostrarCookie(){
    console.log(document.cookie);
}