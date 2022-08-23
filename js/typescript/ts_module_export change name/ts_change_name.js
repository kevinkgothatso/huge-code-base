"use strict";
exports.__esModule = true;
exports.car = void 0;
var car = /** @class */ (function () {
    function car() {
        this.name = "Jon";
    }
    car.prototype.greet = function () {
        console.log("Returns: ".concat(this.name));
    };
    return car;
}());
exports.car = car;
