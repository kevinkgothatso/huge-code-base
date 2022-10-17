


class car{
    
    constructor(brand = "nothing", model = "nothing", year = 0){
        //contructor modularity
        this.brand = brand;
        this.model = model;
        this.year =  year || 1905;

    }
}
   var   carsToRepair = [];

   car1 = new car("Ford", "fiesta", 2010);
   car2 =  new car("Ford",'Focus',2019);

       carsToRepair.push(car1);
       carsToRepair.push(car2);
       console.log(carsToRepair[0]);