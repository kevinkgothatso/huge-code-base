

interface IFunctEmployee{
    (name: string, dept: string) :string;
}


//the data type is functEmployye interface
var state: IFunctEmployee  = addData;

function addData(name, dept): string{
   return (name+" "+dept);
}
console.log(state('OBJ',"Home Affairs"));
