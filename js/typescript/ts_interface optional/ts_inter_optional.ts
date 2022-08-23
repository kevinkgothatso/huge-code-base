interface IEmployee{
    empCode: number;
    empName: string;
    empDept?:string; //optional property
}


//class implemeting interface with an optional property
//Pay attention to the ES
class employeeClass implements IEmployee{
    empCode: number;
    empName: string;

    constructor(){
        this.empCode = 7777;
        this.empName = "Boss";
    }
}

var obj_emp: IEmployee =
{
    empCode : 45545,
    empName : "Jaine"

}

console.log("Employee code: "+obj_emp.empCode);
console.log("Employee name: "+obj_emp.empName);


var empClas = new employeeClass();
console.log("Class employee code: "+empClas.empCode);
console.log("Class employee name: "+empClas.empName);
