//classs inheritance

class car{
    brand: string = "Audi";
    Model: string = "A4";
    Year: number = 2020;
    hasABS: boolean = false;
    
    constructor(brand,Model, Year,hasABS){
      this.brand = brand;this.Model = Model;this.Year = Year;this.hasABS = hasABS;
    }

    showData(){
        var str;
        return str = (this.brand+" "+this.Model+" "+this.Year+" "+this.hasABS);
    }
}


//classs inheritance
class modernCar extends car{
     wheels: string = "";
     color: string = "";

    constructor(brand,Model, Year,hasABS,wheels, color){

         super(brand,Model, Year,hasABS);
         this.brand = brand;this.Model = Model;this.Year = Year;this.hasABS = hasABS;
         this.color; this.wheels;

    }

    soundSystem(): void{
        console.log("Car "+ this.Model+" : was fitted with Music system");
    }

    //override method
    showData(): string {
        return ("We change its code");
    }
}

var modern = new modernCar("Porsche", "Carera 911",2019,true,"Dion","Grey");

console.log(modern.Year);
console.log(modern.showData());
modern.soundSystem();
