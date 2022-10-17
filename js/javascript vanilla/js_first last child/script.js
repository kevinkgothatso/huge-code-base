//child sibling and parent Nodes

var parentUL = document.getElementsByClassName('main')[0]; //getting parent node refernce and child node
var firstC = parentUL.firstChild;
// var lastC = parentUL.lastChild;
var nextC = firstC.nextSibling;
var parentN = firstC.parentNode;

console.log("Parent Node:");
console.log(parentN)

console.log("Parent Items Reference: ");
console.log(parentUL);

console.log("First Child: ");
console.log(firstC);

console.log("Next Sibling: ");
console.log(nextC);

console.log("Last Child: ");
console.log(parentUL.lastChild);


var noderListUi = document.getElementsByClassName('socials');
console.log("item Count:" + noderListUi.length);