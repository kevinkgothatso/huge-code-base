
//literal notation   ****************************************************************************************
//creation with properties and methods
var person = {
     name : "kevin",
     surname : "matseke",
     idNumber: 9410185420,

      getName_Surname: function(){
         return this.name + " " + this.surname;
     }

}
console.log("Name and Surname :" + person.getName_Surname());
console.log("ID Number :" + person.idNumber);
console.log('=====================================');

//creation then later adding properties and methods
var car ={};

car.brand = "BMW";
car.color = "blue";
car.isInsured  = false;
car.showCarInfo = function(){
     return (this.brand + " " + this.color);
}
console.log("Car: "+car.showCarInfo());
console.log('=====================================');



//constructor notation   ****************************************************************************************
//creation with properties and methods
var tree = new Object();

tree.branchCount = 1003;
console.log("Tree branch count: " + tree.branchCount);
console.log('=====================================');

//creation then later adding properties and methods

function House(roomCount, windowCount, IsMansion){
      this.roomCount = roomCount;
      this.windowCount = windowCount;
      this.IsMansion = IsMansion;

      this.showHouseInfo= function(){
          return IsMansion;
      }
}
 var housey = new House(8,15,true);

console.log("Function Object:");
console.log("Room count: " +housey.roomCount);
console.log("Window count: " +housey.windowCount);
console.log("Is it a mansion: " +housey.showHouseInfo());