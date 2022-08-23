//class implemeting interface with an optional property
//its seems a prototype and a class must not implement the same interface
var employeeClass = /** @class */ (function () {
    function employeeClass() {
        this.empCode = 7777;
        this.empName = "Boss";
    }
    return employeeClass;
}());
var obj_emp = {
    empCode: 45545,
    empName: "Jaine"
};
console.log("Employee code: " + obj_emp.empCode);
console.log("Employee name: " + obj_emp.empName);
var empClas = new employeeClass();
console.log("Class employee code: " + empClas.empCode);
console.log("Class employee name: " + empClas.empName);
