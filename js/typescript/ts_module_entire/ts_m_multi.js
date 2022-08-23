"use strict";
exports.__esModule = true;
exports.car = exports.model = exports.isTrue = void 0;
exports.isTrue = false;
exports.model = 45455456;
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
