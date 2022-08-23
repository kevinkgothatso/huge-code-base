

function returnSomething(name: string, ... values:string[]): string{
   return name+" "+values;
}

console.log(returnSomething("January","February","March", "April", "May"));// the values will come with 
//a comma that you need to remove and substring, the values, items