//Dom manipulation

var parent = document.getElementsByTagName('ul')[0];
var ele = document.createElement('li');
var eleText = document.createTextNode('Instagram');

ele.appendChild(eleText);
parent.appendChild(ele);

console.log(parent);