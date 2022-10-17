//Global variable in object

//this object 
var person ={
    name: "foo",
    surname: "boo",

    showInfo : function(name, surname){
        console.log("Name: "+this.name + " and Surname: "+this.surname);
        console.log("Name: "+name + " and Surname: "+surname);
    }
}

person.showInfo("ant 1", "ant 2");


//this function expression 