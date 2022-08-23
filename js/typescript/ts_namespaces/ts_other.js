var something;
(function (something) {
    function greet() {
        return "Hello from namespace file";
    }
    something.greet = greet;
    var car = /** @class */ (function () {
        function car() {
            this.name = "BMW";
            this.model = 4;
        }
        return car;
    }());
    something.car = car;
})(something || (something = {}));
/// <reference path="./ts_namespaces.ts" /> 
console.log(something.greet());
var newCar = new something.car();
console.log(newCar.model);
