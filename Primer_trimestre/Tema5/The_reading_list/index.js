import {Book,BookList} from './modules/books.js'

window.onload = () => {


    var milista = new BookList();
    if (localStorage.milista) {
        for (libro of JSON.parse(localStorage.milista).all) {
            let linueva = document.createElement("li");
            linueva.innerHTML = libro.title + ' ' + libro.author + ' ' + libro.genre + ' ' + libro.read + ' ' + libro.readDate;
            document.getElementById("lista").appendChild(linueva);
            milista.add(libro);
        }

    }
    document.getElementById("enviarymostrar").addEventListener("click", (e) => {
        e.preventDefault()
        let titulo = document.getElementById("titulo").value;
        let genero = document.getElementById("genero").value;
        let autor = document.getElementById("autor").value;
        let leido = document.getElementById("Leido").value;
        let fecha = document.getElementById("fecha").value;
        var libro = new Book(titulo, genero, autor, leido, fecha);
        milista.add(libro);

        localStorage.setItem('milista', JSON.stringify(milista));

        let linueva = document.createElement("li");
        linueva.innerHTML = libro.title + ' ' + libro.author + ' ' + libro.genre + ' ' + libro.read + ' ' + libro.readDate;

        document.getElementById("lista").appendChild(linueva);

    });

}

