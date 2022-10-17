

 class house{
    constructor(units = 0, funiture = false, price = 0){
        this.units = units;
        this.funiture = funiture;
        this.price= price;

        this.checkBBE = false;
    }
    buy = () =>{
       if (this.funiture = true && this.price <= 520000 && this.units >= 5){
        console.log("We are buying this place");
        this.checkBBE = true;
       }
      else {
        console.log("We cant buy this place");
       }
   
    }
}

module.exports = house;