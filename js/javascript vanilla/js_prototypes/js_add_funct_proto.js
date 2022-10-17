//Adding a function using prototype to a function

function objFunc(){
    this.name = "Function Object Name"
}

objFunc.prototype.show = function(){ console.log(this.name)};

   var instance = new objFunc();
        instance.show();
        console.log("ObjFunc Proto: "+Object.getPrototypeOf(objFunc))
        console.log("Instance Proto: "+Object.getPrototypeOf(instance));

//Adding a function to using prototype to an object literal
var objLit = {
    name: "Object Literal Name"
}
console.log(Object.getPrototypeOf(objLit));  //gets 
objLit = Object.prototype.constructor;

objLit.prototype.otheName = "Juice";
console.log(objLit.otheName);

objLit.prototype.show = function(){console.log("works")}
objLit.show();

