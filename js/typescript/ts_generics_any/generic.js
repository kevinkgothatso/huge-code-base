//chnging values of [any] generic type
//=============================================================================
var anything;
anything = "I am a string";
console.log("String: " + anything);
anything = 100;
console.log("Number: " + anything);
anything = [3, 67, 88]; //changing to to an array
console.log(" ");
//Generic types
//=============================================================================
function Names(name) {
    return ("Snow " + name + " Type of data:" + typeof (name));
}
console.log(Names(57)); // will only be of data type number and wont change
console.log(" ");
//multiple generic types, on function
//=============================================================================
function RandomStuff(word_1, word_2) {
    return (word_1 + " " + word_2); //cant return a generic
}
console.log(RandomStuff("Multiverse", 37));
//generics can only be used on functions, or methods
