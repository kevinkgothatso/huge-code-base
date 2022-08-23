var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function propertyDecoratorSetGet(target, property) {
    var value = target[property];
    Object.defineProperty(target, property, {
        get: function () { return value; },
        set: function (newValue) {
            value = newValue;
            console.log(value);
        }
    });
    //there is define propety and define propetties, use define property
}
var the_classx = /** @class */ (function () {
    function the_classx() {
        this.value = 100;
    }
    __decorate([
        propertyDecoratorSetGet
    ], the_classx.prototype, "value");
    return the_classx;
}());
var tc = new the_classx();
tc.value = 90;
