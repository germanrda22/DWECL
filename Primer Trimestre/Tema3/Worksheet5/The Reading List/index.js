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
            return "no hay mas libros para leer";
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

libro0 = new Book("el señor de los anillos 0","fantasia","Tolkien",true, new Date());
libro1 = new Book("el señor de los anillos 1","fantasia","Tolkien",false, new Date());
libro2 = new Book("el señor de los anillos 2","fantasia","Tolkien",false, new Date());
libro3 = new Book("el señor de los anillos 3","fantasia","Tolkien",false, new Date());

lista = new BookList(1,2,libro2,libro1,libro0);

lista.add(libro0);
lista.add(libro1);
lista.add(libro2);
lista.add(libro3);