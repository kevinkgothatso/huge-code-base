//passing an named object to javascript 
 var objValues = {
    name: "Kevin",
    surname: "Letlape",
    age: 27,
     status: "single"
 }

 function acceptData_1(objectx){
    console.info(objectx.name+" "+objectx.surname+" "+objectx.age+" "+objectx.status)
 }
console.info("Named Object:");
acceptData_1(objValues);
console.info("================================");

//passing a nameless object to a function javascript

function acceptData_2({name,surname,age, status}){
    console.info(name+" "+surname+" "+age+" "+status);
}
console.info("Nameless Object:")
acceptData_2({
    name: "Kevin",
    surname: "Letlape",
    age: 27,
     status: "single"
});