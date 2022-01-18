window.addEventListener("load", main);

function main() {
    minimalista();
    document.getElementById("normal").addEventListener("click", normal);
    document.getElementById("minimalista").addEventListener("click", minimalista);
}

function normal() {
    document.body.style.backgroundColor = "#f5cb92";
    document.getElementById("p5").style.backgroundColor = "yellow";
    document.getElementById("p5").style.border = "2px solid";
    document.getElementById("marco").style.backgroundColor = "lightblue";
    document.getElementById("marco").style.border = "2px solid";
    document.getElementById("marco").style.color = "blue";
    document.getElementById("p4").style.visibility = "visible";
    document.getElementById("contenedor").style.borderLeft = "100px solid blue";
    document.getElementById("contenedor").style.padding = "2px";
}

function minimalista() {
    document.body.style.backgroundColor = "";
    document.getElementById("p5").style.backgroundColor = "";
    document.getElementById("p5").style.border = "";
    document.getElementById("marco").style.backgroundColor = "";
    document.getElementById("marco").style.border = "";
    document.getElementById("marco").style.color = "";
    document.getElementById("p4").style.visibility = "hidden";
    document.getElementById("contenedor").style.borderLeft = "";
    document.getElementById("contenedor").style.padding = "";
}