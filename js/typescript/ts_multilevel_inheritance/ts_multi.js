//a class inheriting from a class
//then another child class inherits from a child class
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
var parentClass = /** @class */ (function () {
    function parentClass() {
    }
    parentClass.prototype.greet = function () {
        console.log("Hello from parent");
    };
    parentClass.prototype.change = function () {
        return "By Parent";
    };
    return parentClass;
}());
var parent_1 = new parentClass();
parent_1.greet();
console.log(parent_1.change());
console.log("");
///1st child class
//===========================================================================
var fisrtChild = /** @class */ (function (_super) {
    __extends(fisrtChild, _super);
    function fisrtChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    fisrtChild.prototype.greet = function () {
        console.log("Hello from first child");
    };
    return fisrtChild;
}(parentClass));
var fChild = new fisrtChild();
fChild.greet();
console.log("");
///1st child class
//===========================================================================
var secondChild = /** @class */ (function (_super) {
    __extends(secondChild, _super);
    function secondChild() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    secondChild.prototype.greet = function () {
        console.log("Hello by second child");
    };
    secondChild.prototype.change = function () {
        return "By second child";
    };
    return secondChild;
}(fisrtChild));
var sChild = new secondChild();
sChild.greet();
console.log(sChild.change());
