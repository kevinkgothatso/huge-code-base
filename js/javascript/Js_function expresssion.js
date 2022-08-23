
//normal function
function nfunction(){
    return "express";
}
console.log("normal function: "+ nfunction());
console.log("====================================================");



//function expression (anonyomous function and expression)
var expresssion = function (width, height){
    global = "70";
    return width*height;
}
console.log("expression :"+ expresssion(5,10));
// testing global scope on absent var keyword
console.log("global :"+ global);
console.log("====================================================");

//immediately invoked function expression
var area;
console.log("IIFE" , area = ( function(){
    return 100*100;
}()));
console.log("====================================================" + area);

//normal variable declaration
var total;
total = 100;
console.log("totaL :"+ total);


//arrow function
global = "70";