//eneums and functions
var Employee;
(function (Employee) {
    Employee[Employee["Manager"] = 0] = "Manager";
    Employee[Employee["Developer"] = 1] = "Developer";
    Employee[Employee["Senior Developer"] = 2] = "Senior Developer";
})(Employee || (Employee = {}));
;
function ChangeEmployee() {
    return "intern";
}
//change enum
console.log("Empoyee: " + Employee[0]); //You can only read an enum value
console.log("Fucntion Return: " + ChangeEmployee());
console.log("Enum number: " + Employee.Manager);
//void function that has a parameter
function isRole(role) {
    console.log("Whats the role: " + role);
}
isRole(Employee[1]);
