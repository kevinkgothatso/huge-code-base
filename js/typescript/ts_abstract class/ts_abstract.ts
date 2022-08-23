
abstract class car{
     color: string;

     constructor(color){
         this.color = color;
     }

     showColor(): string{
        return this.color
     }
}

class modernCar extends car{
    model: string;
    constructor(color, model){
        super(color);
        this.model = model;
    }
    showColor(): string {
        return ("color: "+this.color+" Model: "+this.model)
    }
}

var mcar = new modernCar("Blue", "A45");
console.log(mcar.showColor());
