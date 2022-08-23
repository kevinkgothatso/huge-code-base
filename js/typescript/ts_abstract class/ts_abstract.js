var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car = /** @class */ (function () {
    function car(color) {
        this.color = color;
    }
    car.prototype.showColor = function () {
        return this.color;
    };
    return car;
}());
var modernCar = /** @class */ (function (_super) {
    __extends(modernCar, _super);
    function modernCar(color, model) {
        var _this = _super.call(this, color) || this;
        _this.model = model;
        return _this;
    }
    modernCar.prototype.showColor = function () {
        return ("color: " + this.color + " Model: " + this.model);
    };
    return modernCar;
}(car));
var mcar = new modernCar("Blue", "A45");
console.log(mcar.showColor());
