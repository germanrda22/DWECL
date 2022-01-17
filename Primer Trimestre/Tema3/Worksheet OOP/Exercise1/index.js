class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.stomach = new Array();
    }

    eat(food){
        if (length(this.stomach < 10)){
            this.stomach.push(food);
        }
        
    }

    poop(){
        this.stomach = [];
    }

    toString(){
        document.write(`${this.name}, ${this.age}`);
    }
}