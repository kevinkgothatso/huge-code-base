class car{
    constructor(brand , model){
        this.brand = brand;
        this.model = model;
     } 
}

class sports extends car{
    addturbo = () =>{
        console.log('Add turbo '+ this.brand);
    }
}

car1 = new car("Ford", "Focus");
sports1 = new sports;

sports1.brand = "Ferari";
sports1.addturbo();
console.log(sports1.brand);