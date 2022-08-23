//passing an object with names to a function

function accept(data:any):void{
     console.log(data.name+" "+data.surname+" "+data.age)
}
    //   function accept(data: {name:string,surname:string,age:number}){
    //     console.log(data.name+" "+data.surname+" "+data.age)
    //     or you can use this method
    //   }

var data = {
    name: "Judas",
    surname: "Eskar",
    age: 29
}

accept(data);
console.log("==============================");

//passing a namesless object to a function
function acceptNameless({name,surname,age}):void{
    console.log(data.name+" "+data.surname+" "+data.age)
}

acceptNameless({
    name: "Kevin",
    surname: "Letlape",
    age: 27
});