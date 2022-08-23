"use strict";
exports.__esModule = true;
exports.car = exports.isTrue = void 0;
exports.isTrue = false;
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
