//N.B a function can also be called with a new keyword, more like instatiaion

function show(price, category){
   return "price: "+ price +" category: "+category;
}

console.info("Prototype (refence): "+ show.prototype);
console.log("Length of Params: "+show.length);
console.log(" ");

//instaiate function
var variableFunction = show(44,"shoes");
console.log(variableFunction);

// var variableFunction = new show(44,"shoes"); //gives function reference
// console.log(variableFunction);


//protptype inside fucntion   //shows the fucntion itself
// function new_show(){
//     console.log(new_show.prototype);
// }

// new_show();