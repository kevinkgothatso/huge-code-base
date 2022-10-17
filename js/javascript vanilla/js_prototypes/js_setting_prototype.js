var show ={
    full_name: "jon snow",
    funcShow: function(){
        console.log(this.full_name);
    }
}

function Person(){
  var  value = 56;
}

Person.prototype = show;
Person.prototype.constructor = show;

var p = new Person();
p.funcShow();

console.log("prototype of person: "+ Object.getPrototypeOf(show));
