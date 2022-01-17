class Alumno{
    constructor(name, surname, course){
        this.nombre = name;
        this.apellidos = surname;
        this.curso = course;
    }

    imprimeDatos(){
        console.log(`El alumno ${this.nombre} ${this.apellidos} pertenece a ${this.curso}`);
    }

    despertar(segundos){
        setTimeout( () => {
            console.log(`Acaba de despertarse ${this.nombre}`)
        } , segundos*1000);
    }
}

class AlumnoCiclos extends Alumno{
    constructor(name, surname, course, nivelFrikismo){
        super(name, surname, course);
        this.frikometro = nivelFrikismo;
    }
    getInfor(){
        super.imprimeDatos()
        console.log(`y su nivel de friki es ${this.frikometro}`);
    }
}

let al1 = new Alumno('Carlos', 'Moreno', 'Bachillerato');
al1.imprimeDatos();
let al2 = new Alumno('Pablo', 'Muñoz', '2ESO');
al2.imprimeDatos();
console.log(al2.nombre);
al2.despertar(2);
let al3 = new AlumnoCiclos("Jose Antonio", "Duarte", "2DAW", 100);
al3.getInfor()