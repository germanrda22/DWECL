class BookList{
    constructor(read,notReadYet,next,current,last) {
        this.readBooks = read;
        this.notReadYet = notReadYet;
        this.next = next;
        this.current = current;
        this.last = last;
        this.all = [];
    }

    add(book){
        this.all.push(book);
    }

    finishCurrentBook(){
        this.notReadYet -= 1;
        this.readBooks = this.current;
        this.last.readDate = new Date(Date.now());
        this.last = this.current;
        this.current = this.next;
        this.last.read = true;
        var i = 0;
        if(this.notReadYet != 0){
            while(this.all[i].read == true || this.all[i] == this.current)
                i++;
            
            this.next = this.all[i];
        }
        else
            return "No hay mas libros para leer";
    }    
}

class Book{
    constructor(title,genre,author,read,readDate = "") {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }

}

function interfaz(){
    document.body.style.background="#FFA07A";
    document.getElementById("contenido").style.textAlign="center";
    document.getElementById("imagen").style.maxwidth="100%";
    document.getElementById("imagen").style.height="auto";
    document.getElementById("form").style.background="#87CEFA";
    document.getElementById("form").style.width="70%";
    document.getElementById("form").style.margin="auto";

    document.getElementById("boton").addEventListener("click", (e)=>{
        e.preventDefault();
            let title = document.getElementById("titulo").value;
            let genre = document.getElementById("genero").value;
            let author = document.getElementById("autor").value;
            let readDate = document.getElementById("leido").value;

            libro = new Book(title,genre,author,readDate);
            lista_libros.add(libro);

            let li_nueva = document.createElement("li");
            let texto = title + ' ' + genre + ' ' + author +  ' ' + readDate ;
            li_nueva.innerHTML= texto;
            //li_nueva.addEventListener("click",borrar_li);
            document.getElementById("form").appendChild(li_nueva);
    });
}

window.addEventListener("load", interfaz);