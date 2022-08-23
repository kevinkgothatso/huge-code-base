
//another decorator, with parameters
function functWithParam(name: string, other:number){
    return function decorator(target: Function){
         target.prototype.decorator = function(){
              console.log("Name :"+name+" "+other);
         }
     }
 }   //it only takes in strings
 
 @functWithParam("Susan", 50000)
    class theDecoClass{
        constructor(){
 
        }
    }
 
    var deco: any = new theDecoClass();
        deco.decorator();