
var date = new Date();

var objectProto = Object.getPrototypeOf(date);
console.log(objectProto);// date prototype

var secondProto = Object.getPrototypeOf(objectProto);
console.log(secondProto);  //curly brackets which mean Object

var thirdProto = Object.getPrototypeOf(secondProto);
console.log(thirdProto);  //null result