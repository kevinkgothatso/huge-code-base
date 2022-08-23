var android = /** @class */ (function () {
    function android() {
        this.life_score = 5;
        this.name = "Andriod";
    }
    android.prototype.greet = function () { console.log("Hello from " + this.name); };
    android.prototype.showData = function () { return (this.name + " " + this.life_score); };
    android.prototype.info = function () { console.log("Andriods are synthetic"); };
    return android;
}());
var and = new android();
and.greet();
and.info();
console.log(and.showData());
console.log("");
//================================================================//
var human = /** @class */ (function () {
    function human() {
        this.life_score = 10;
        this.name = "Human";
    }
    human.prototype.greet = function () { console.log("Hello from " + this.name); };
    human.prototype.showData = function () { return (this.name + " " + this.life_score); };
    human.prototype.special = function () { console.log("Humans give birth"); };
    return human;
}());
var hum = new human();
hum.greet();
hum.special;
console.log(hum.showData());
//you can only extend an iterface to an interface
//uses word implements
