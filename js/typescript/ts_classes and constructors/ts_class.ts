//class with no constructor

class person{
    name: string = "Jon";
    surname: string = "Snow";
    amount: number = 4500000;

    greet(name, surname,amount){
      
       if(name === ""|| surname ==="" && amount <=0 ){
        return (name+" "+surname+" "+amount);
       }
       else{
        return (this.name+" "+this.surname+" "+this.amount);
       }
    }
}


var person_1 = new person();
console.log(person_1.greet(" ", " ", 0));

//class with constructor

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

var car_1 = new car("Porsche", "Carera 911",2019,true); //a class with a constructor needs to be set up
console.log(car_1.showData());