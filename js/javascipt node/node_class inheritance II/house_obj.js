const house = require("./Side");
    

    class bbe extends house{

        show(checkBBE){
            (checkBBE)? console.log("African Inidvidual"): console.log("Not African individaul");
         }
        
    }

     bbe1 = new bbe(5, true, 40000);
     bbe1.buy();
     bbe1.show(bbe1.checkBBE);
     

    
