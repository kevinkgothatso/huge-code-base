//classs inheritance
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
    function car(brand, Model, Year, hasABS) {
        this.brand = "Audi";
        this.Model = "A4";
        this.Year = 2020;
        this.hasABS = false;
        this.brand = brand;
        this.Model = Model;
        this.Year = Year;
        this.hasABS = hasABS;
    }
    car.prototype.showData = function () {
        var str;
        return str = (this.brand + " " + this.Model + " " + this.Year + " " + this.hasABS);
    };
    return car;
}());
//classs inheritance
var modernCar = /** @class */ (function (_super) {
    __extends(modernCar, _super);
    function modernCar(brand, Model, Year, hasABS, wheels, color) {
        var _this = _super.call(this, brand, Model, Year, hasABS) || this;
        _this.brand = brand;
        _this.Model = Model;
        _this.Year = Year;
        _this.hasABS = hasABS;
        return _this;
    }
    modernCar.prototype.soundSystem = function () {
        console.log("Car " + this.Model + " : was fitted with Music system");
    };
    //override method
    modernCar.prototype.showData = function () {
        return ("We change its code");
    };
    return modernCar;
}(car));
var modern = new modernCar("Porsche", "Carera 911", 2019, true, "Dion", "Grey");
console.log(modern.Year);
console.log(modern.showData());
modern.soundSystem();
