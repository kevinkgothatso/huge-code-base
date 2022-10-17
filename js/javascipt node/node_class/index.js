
class car{
    
    constructor(){
        this.brand = "";
        this.model = "";
        this.year = 0;
    }

    carYear2020(){
        if(this.year >= 2010){
            console.log("Less than 2020");
        }
    }
    carYearCompare(yearx){
       var  tempModel = this.yearx;
        if(tempModel > this.year){
            console.log('car 1 is older model');
        }
    }
}

   car1 = new car();
   car1.model = "fiesta";
   car1.brand =  "Ford";
   car1.year = 2010;

   car2 = new car();
   car2.model = "fiesta";
   car2.brand =  "Ford";
   car2.year = 2019;

       car1.carYear2020();
       car1.carYearCompare(car2.year);