var namesNStuff = /** @class */ (function () {
    function namesNStuff() {
        this.names = [
            { id: 1, name: "Jon", surname: "Snow" },
            { id: 2, name: "Camilla", surname: "Vargas" },
            { id: 3, name: "Terrion", surname: "Targarian" }
        ];
    }
    namesNStuff.prototype.getAllNames = function () {
        return this.names;
    };
    namesNStuff.prototype.passNamesEdit = function (data) {
        var index = data.id;
        this.names[index] = data;
        return (this.names[index]);
    };
    return namesNStuff;
}());
var obj = new namesNStuff();
console.log(obj.getAllNames());
console.log(obj.passNamesEdit({ id: 2, name: "Donovan", surname: "Tencent" }));
