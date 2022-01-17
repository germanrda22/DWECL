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

let l1 = new Lambdasian(["Germán", 19, "Granada"]);
console.log(l1.speak());