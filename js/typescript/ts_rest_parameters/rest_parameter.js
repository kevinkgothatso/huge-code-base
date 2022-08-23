function returnSomething(name) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return name + " " + values;
}
console.log(returnSomething("January", "February", "March", "April", "May"));
// function hello(): void{
// }
// function hello(): void{
// }
// function hello(): void{
// }
