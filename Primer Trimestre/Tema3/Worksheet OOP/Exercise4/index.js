class Lambdasian {
    constructor(parametros) {
        this.name = parametros[0];
        this.age = parametros[1];
        this.location = parametros[2];
    }

    speak() {
        return "Hello, my name is " + this.name + ", I am from " + this.location;
    }
}

class Instructor extends Lambdasian {
    contructor(valores) {
        // super(parametros, valores);
        this.specialty = valores[0];
        this.favLanguage = valores[1];
        this.cathPhrase = valores[2];
    }

    demo(asignatura) {
        return "Today we are learning about " + asignatura;
    }

    grade(estudiante, asignatura) { // Estudiante es un objeto de Lambdasian
        return `${estudiante.name} receives a perfect score on ${asignatura}`;
    }
}

let I1 = new Instructor(["Javier", 20, "Granada"], ["TIC", "JavaScript", "Why are you late?"]);
console.log(I1);
console.log(I1.speak());
console.log(I1.demo("Maths"));
console.log(I1.grade(l1, "Lengua"));