//passing an object with names to a function
function accept(data) {
    console.log(data.name + " " + data.surname + " " + data.age);
}
var data = {
    name: "Judas",
    surname: "Eskar",
    age: 29
};
accept(data);
console.log("==============================");
//passing a namesless object to a function
function acceptNameless(_a) {
    var name = _a.name, surname = _a.surname, age = _a.age;
    console.log(data.name + " " + data.surname + " " + data.age);
}
acceptNameless({
    name: "Kevin",
    surname: "Letlape",
    age: 27
});
