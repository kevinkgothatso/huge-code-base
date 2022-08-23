//class with no constructor
var person = /** @class */ (function () {
    function person() {
        this.name = "Jon";
        this.surname = "Snow";
        this.amount = 4500000;
    }
    person.prototype.greet = function (name, surname, amount) {
        if (name === "" || surname === "" && amount <= 0) {
            return (name + " " + surname + " " + amount);
        }
        else {
            return (this.name + " " + this.surname + " " + this.amount);
        }
    };
    return person;
}());
var person_1 = new person();
console.log(person_1.greet(" ", " ", 0));
//class with constructor
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
var car_1 = new car("Porsche", "Carera 911", 2019, true); //a class with a constructor needs to be set up
console.log(car_1.showData());
