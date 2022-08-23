var something = /** @class */ (function () {
    function something() {
    }
    something.prototype.dataMethod = function () {
        return { names: [
                { id: 1, name: "Jon" },
                { id: 2, name: "Jane" },
                { id: 3, name: "Jonny" }
            ]
        };
    };
    something.prototype.dataMethod_2 = function () {
        var names = [
            { id: 1, name: "Jon" },
            { id: 2, name: "Jane" },
            { id: 3, name: "Jonny" }
        ];
        return { names: names };
    };
    return something;
}());
// var names = [
//     {id: 1, name:"Jon"},
//     {id: 2, name:"Jane"},
//     {id: 3, name:"Jonny"}];
var somethingx = new something();
console.log(somethingx.dataMethod());
console.log("index 0:" + somethingx.dataMethod().names[0].id + " " + somethingx.dataMethod().names[0].name);
console.log();
console.log(somethingx.dataMethod_2());
console.log("index 0:" + somethingx.dataMethod_2().names[0].id + " " + somethingx.dataMethod_2().names[0].name);
// console.log('Data:'+somethingx.dataMethod_2().names[0]); //only way to return fucntion level scope 
//array is via curly brackets
