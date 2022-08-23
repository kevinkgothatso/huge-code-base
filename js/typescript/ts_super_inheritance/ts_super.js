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
    function car(brand, Model, Year) {
        this.brand = "Audi";
        this.Model = "A4";
        this.Year = 2020;
        this.brand = brand;
        this.Model = Model;
        this.Year = Year;
    }
    car.prototype.showData = function () {
        var str;
        return str = (this.brand + " " + this.Model + " " + this.Year + " ");
    };
    return car;
}());
var car_1 = new car("BMW", "M2", 2003);
console.log(car_1.showData());
//child class
//=================================================================
var modern_Car = /** @class */ (function (_super) {
    __extends(modern_Car, _super);
    function modern_Car(brand, model, year) {
        return _super.call(this, brand, model, year) || this;
    }
    modern_Car.prototype.consoleData = function () {
        console.log("From Modern Car: " + _super.prototype.showData.call(this));
    };
    return modern_Car;
}(car));
var mcar = new modern_Car("BMW", "M4", 2010);
mcar.consoleData();
