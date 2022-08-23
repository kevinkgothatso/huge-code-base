class car{
    brand: string = "Audi";
    Model: string = "A4";
    Year: number = 2020;
    
    constructor(brand,Model, Year){
      this.brand = brand;this.Model = Model;this.Year = Year;
    }

    showData(){
        var str;
        return str = (this.brand+" "+this.Model+" "+this.Year+" ");
    }
}

var car_1 = new car("BMW","M2",2003);
console.log(car_1.showData());

//child class
//=================================================================

class modern_Car extends car{
    constructor(brand, model, year){
        super(brand, model, year); //this time i am not extending the constructor parameters
    }
    consoleData():void{
        console.log("From Modern Car: "+super.showData());
    }
}

var mcar = new modern_Car("BMW","M4",2010);
mcar.consoleData();