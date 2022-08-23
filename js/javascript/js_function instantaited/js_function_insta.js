
//as object
function personOBJ(name, age, color){
      this.namex = name;
      this.age = age;
      this.color = color;
}


let other_person = new personOBJ("john", 78,"Brown");
console.log(other_person.color);


//as function
function personFunc(name, age, color){
    this.namex = name;
    this.age = age;
    this.color = color;

    console.log(name+" "+color+" "+age);
}

personFunc("john", 78,"Black");
console.dir(Function);