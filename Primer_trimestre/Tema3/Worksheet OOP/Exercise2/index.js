class Car{
    constructor(model, milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons){
        this.tank += gallons;
    }

    drive(distance){
        distan = this.tank / this.milesPerGallon;
        if (distan < distance){
            this.odometer += distan;
            this.tank -= (distan * this.milesPerGallon);
            return `I ran out of fuel at ${this.odometer} miles`;
        } else {
            this.odometer += distance;
            this.tank -= (distance * this.milesPerGallon);
        }
    }
}