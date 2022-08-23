///literal object

var obj_literal = {
    name: "Jon",
    surname: "Snow",

    show: function(){
        console.log("Literal object: "+this.name+" "+this.surname);
    }
}

obj_literal.show();
console.log(" ");
//class objects
  class ohhClass{
      name: string;
      surname: string;

      constructor(namex, surnamex){
           this.name = namex; this.surname = surnamex;
      }

      show(){
          console.log("Class object: "+this.name+ " "+ this.surname);
      }
  }

  var instatiated_obj = new ohhClass("Susan","Mashaba");
  instatiated_obj.show();

