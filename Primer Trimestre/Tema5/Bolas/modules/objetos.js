class bola{
    constructor(radio, posicionX, posicionY, velocidadX, velocidadY) {
        this.x = posicionX;
        this.y = posicionY;
        this.radio = radio;
        this.vX = velocidadX;
        this.vY = velocidadY;
    }

    mueve(anchoContenedor, altoContenedor){
        this.x += this.vX;
        this.y += this.vY;

        if ((this.x - this.radio) <= 0 || (this.x + this.radio) >= anchoContenedor){
            this.vX *= -1;
        }
        if ((this.y - this.radio) <= 0 || (this.y + this.radio) >= altoContenedor){
            this.vY *= -1;
        }
    }

    colisiona(barra){
        if((this.x >= barra.y) && (this.x <= (barra.y + barra.alto))){
            if(this.x == barra.x + barra.ancho){
                this.vX *= -1;
                this.vY *= -1;
                this.x += this.vX;
                this.y += this.vY;
            }
        }
    }
}

class interfazBola{
    constructor(bola, svg, color) {
        this.bola = bola;
        this.tag = document.createElementNS("http://www.w3.org/2000/svg","circle");
        this.tag.setAttribute("fill", color);
        this.tag.setAttribute("cx", bola.x);
        this.tag.setAttribute("cy", bola.y);
        this.tag.setAttribute("r", bola.radio);
        svg.appendChild(this.tag);
    }

    dibuja(){
        this.tag.setAttribute("cx", this.bola.x);
        this.tag.setAttribute("cy", this.bola.y);
    }
}

class barra{
    constructor(posicionX, posicionY, ancho, largo) {
        this.x = posicionX;
        this.y = posicionY;
        this.ancho = ancho;
        this.largo = largo;
        this.velocidad = 5;
    }

    mueve(altoContenedor){
        this.y += this.velocidad;
        if (this.y < 0 || (this.y+this.largo) > altoContenedor){
            this.velocidad *= -1;
        }
    }
}

class interfazBarra{
    constructor(barra, svg, color) {
        this.barra = barra;
        this.tag = document.createElementNS("http://www.w3.org/2000/svg","rect");
        this.tag.setAttribute("fill", color);
        this.tag.setAttribute("x", barra.x);
        this.tag.setAttribute("y", barra.y);
        this.tag.setAttribute("width", barra.ancho);
        this.tag.setAttribute("height", barra.largo);
        svg.appendChild(this.tag);
    }

    dibuja(){
        this.tag.setAttribute("x", this.barra.x);
        this.tag.setAttribute("y", this.barra.y);
    }
}

export {bola,interfazBola, barra, interfazBarra};