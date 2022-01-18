import {aleatorio, colorAleatorio} from './modules/aleatorios.js';
import {bola,interfazBola, barra, interfazBarra} from './modules/objetos.js';

window.onload = () => {
    
    const svg = document.getElementById("panel");
    const tam = svg.getBoundingClientRect();
    var bolita = new bola(aleatorio(1,10),tam.width/2,tam.height/2,5,5);
    var bolitaInterfaz = new interfazBola(bolita, svg, colorAleatorio());
    
    var color_barra = colorAleatorio()

    var barrita1 = new barra(5,5,5,30);
    var interfazBarrita1 = new interfazBarra(barrita1, svg, color_barra);

    var barrita2 = new barra(tam.width - 5, tam.height/2, 5, 30);
    var interfazBarrita2 = new interfazBarra(barrita2, svg, color_barra);
    

    setInterval(()=>{
        
        bolita.mueve(tam.width, tam.height);
        bolita.colisiona(barrita1);
        bolita.colisiona(barrita2);
        bolitaInterfaz.dibuja();
        
        barrita1.mueve(tam.height);
        interfazBarrita1.dibuja();

        barrita2.mueve(tam.height);
        interfazBarrita2.dibuja();
    }, 30);
}
