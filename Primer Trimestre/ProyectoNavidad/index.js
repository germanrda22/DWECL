//API Disney
window.addEventListener('scroll', () => {
    if (
      window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000
    ) {
      loadDoc(siguientePagina);
    }
});
var siguientePagina = "";
window.onload = inicio;

function inicio(){
    loadDoc("https://api.disneyapi.dev/characters");
}


function loadDoc(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
            maquetar(JSON.parse(this.responseText));
            siguientePagina = JSON.parse(this.responseText).nextPage;
        }
    };
    xhttp.open("GET",url, true);
    xhttp.send();
}

function maquetar(json){
    for(let i=0;i<json.data.length;i++){
        console.log(json.data[i].name);
        var div= document.createElement("div");
        div.style.width="15rem";
        div.id = i;
        div.style.height="15rem";
        div.style.display="inline-block";
        div.style.margin="1rem";
        div.style.borderRadius="30px";
        div.style.paddingBottom= "2rem";
        div.style.backgroundColor="rgba(215,189,226,0.6)";
        div.onclick=()=>{
            maquetarCard(json.data[i]);
        }

        var img=document.createElement("img");
        img.src=json.data[i].imageUrl;
        img.style.width="10rem";
        img.style.borderRadius="15px";
        img.style.height="10rem";

        var nombre= document.createElement("p");
        nombre.style.textAlign="center";
        nombre.style.color="white";
        nombre.style.fontSize="18px"
        nombre.textContent=json.data[i].name;

        document.getElementById("card").appendChild(div);
        div.appendChild(nombre);
        div.appendChild(img);

        
    }
}

function maquetarCard(json){
    console.log(json);
    var modal = document.getElementById("tvesModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";

    document.body.style.position = "static";
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";

    document.getElementById("name").textContent = json.name;
    document.getElementById("peliculas").textContent="Films: " + lista(json.films);
    document.getElementById("peliculasCortas").textContent="Short Films: " + lista(json.shortFilms);
    document.getElementById("series").textContent="Series: " + lista(json.tvShows);
    document.getElementById("videoJuegos").textContent="Video Games: " + lista(json.videoGames);
    document.getElementById("atracciones").textContent="Park Atraccions: " + lista(json.parkAttractions);
    document.getElementById("aliados").textContent="Allies: " + lista(json.allies);
    document.getElementById("enemigos").textContent="Enemies: " + lista(json.enemies);
    span.onclick = function() {
        modal.style.display = "none";

        document.body.style.position = "inherit";
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";
    } 
}

function lista(lista){
    if(lista.length > 0){
        var texto = "";
      for(let i = 0; i <lista.length; i++){
        if(i == lista.length - 1){
            texto += lista[i] + ".";
        }else{
            texto += lista[i] + ", ";
        }
      }
      return texto;
    }else{
      return "-";
    }
}