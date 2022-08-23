//chnging values of [any] generic type
//=============================================================================
var anything: any;
anything = "I am a string"
console.log("String: "+anything)
anything = 100;
console.log("Number: "+ anything)

anything = [3,67,88]; //changing to to an array
console.log(" ");

//type Generic
//=============================================================================

 function Names<T>(name: T){
    return ("Snow "+name + " Type of data:"+typeof(name));
 }

 console.log(Names<number>(57)); // will only be of data type number and wont change
 console.log(" ");

//multiple generic types, on function
//=============================================================================

function RandomStuff<T,H>(word_1: T,word_2: H): string{ //mutiple generics can only return a void or normal data types
    return (word_1 + " "+ word_2); //cant return a generic
}

console.log(RandomStuff<string, number>("Multiverse", 37));


//generics can only be used on functions, or methods
