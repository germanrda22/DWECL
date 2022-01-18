class Gato{
    constructor(nombre){
        this.nombre = nombre;
        this.cuentaClicks = 0;
    }

    dibujaGato(){
        var gato = document.createElement("img");
        gato.src = `${this.nombre} + .jpg`;
        var clicks = document.createElement("p");
        body.appendChild(gato);
        body.appendChild(clicks);
    }

    click(){
        this.cuentaClicks += 1;
        
    }
}