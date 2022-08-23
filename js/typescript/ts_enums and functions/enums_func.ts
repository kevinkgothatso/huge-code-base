//eneums and functions
enum Employee {"Manager","Developer","Senior Developer"};

function ChangeEmployee(): string{
    return "intern";
}

//change enum
console.log("Empoyee: "+ Employee[0]); //You can only read an enum value
console.log("Fucntion Return: "+ ChangeEmployee());
console.log("Enum number: "+ Employee.Manager);



//void function that has a parameter
 function isRole(role:string): void{
     console.log("Whats the role: "+role);
 }

isRole(Employee[1]);