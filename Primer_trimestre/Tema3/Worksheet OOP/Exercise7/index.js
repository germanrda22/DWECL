class Lambdasian {
    constructor(parametros) {
        this.name = parametros.name;
        this.age = parametros.age;
        this.location = parametros.location;
    }

    speak() {
        return "Hello, my name is " + this.name + ", I am from " + this.location;
    }
}

let l1 = new Lambdasian({name:"Ramón", age:23, location:"Jaén"});
console.log(l1.speak());

class Instructor extends Lambdasian {
    constructor(parametros, valores) {
        super(parametros);
        this.specialty = valores.specialty;
        this.favLanguage = valores.favLanguage;
        this.cathPhrase = valores.catchPhrase;
    }

    demo(asignatura) {
        return "Today we are learning about " + asignatura;
    }

    grade(estudiante, asignatura) { // Estudiante es un objeto de Lambdasian
        return `${estudiante.name} receives a perfect score on ${asignatura}`;
    }

    incrementGrade(){
        return Student.grade += Math.trunc(Math.random()* 99 + 1)
    }
}

let I1 = new Instructor({name:"Javier", age:20, location:"Granada"}, {specialty:"TIC", favLanguage:"JavaScript", catchPhrase:"Why are you late?"});
console.log(I1);
console.log(I1.speak());
console.log(I1.demo("Maths"));
console.log(I1.grade(l1, "Lengua"));

class Student extends Lambdasian {
    constructor(parametros, datos) {
        super(parametros)
        this.previousBackground = datos.previousBackground;
        this.className = datos.className;
        this.favSubjects = datos.favSubjects;
        this.grade = Math.trunc(Math.random()* 99 + 1);

    }

    listSubjects(...array_subjects) { // Indicamos con 3 puntos para que coja todos los valores del array

        return `Loving ${array_subjects}`;
    }

    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }

    graduate(){
        if (this.grade > 70){
            return `Te puedes graduar`;
        }else{
            Instructor.incrementGrade();
            return `Aún no te puedes graduar`;
        }
    }
}

let student1 = new Student({name:"Miguel", age:20, location:"Zaragoza"}, {previousBackground:"Nada", className:"2ºDAW", favSubjects:"TIC"});
console.log(student1.listSubjects("P.E", "Maths", "TIC"));
console.log(student1.PRAssignment(l1, "Ciencias Naturales"));

class ProjectManager extends Instructor{
    constructor(parametros, valores, object){
        super(parametros, valores);
        this.grandClassName = object.grandClassName;
        this.favInstructor = object.favInstructor;

    }

    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times`;
    }

    debugsCode(stu, subject){
        return `${this.name} debugs ${stu.name}'s code on ${subject}`
    }
}

let pm1 = new ProjectManager({name:"Manuel", age:30, location:"Huelva"}, {specialty:"Math",
favLanguage:"PHP", catchPhrase:"Hello"}, {grandClassName:"CS3", favInstructor:"Pepe"});
console.log(pm1.standUp(7));
console.log(pm1.debugsCode(student1, "Lengua"));