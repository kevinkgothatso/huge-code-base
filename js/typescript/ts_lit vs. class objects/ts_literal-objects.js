///literal object
var obj_literal = {
    name: "Jon",
    surname: "Snow",
    show: function () {
        console.log("Literal object: " + this.name + " " + this.surname);
    }
};
obj_literal.show();
console.log(" ");
//class objects
var ohhClass = /** @class */ (function () {
    function ohhClass(namex, surnamex) {
        this.name = namex;
        this.surname = surnamex;
    }
    ohhClass.prototype.show = function () {
        console.log("Class object: " + this.name + " " + this.surname);
    };
    return ohhClass;
}());
var instatiated_obj = new ohhClass("Susan", "Mashaba");
instatiated_obj.show();
