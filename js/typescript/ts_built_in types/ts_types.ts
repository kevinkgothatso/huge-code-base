

var bolValue: boolean = true;
console.log(bolValue);

var str: string = "Man United";
console.log(str);

var number: number = 4000;
console.log(number);

var body = document.getElementsByTagName('body')[0];
var ul = document.createElement('ul');

var li = document.createElement('li');
li.innerText = str; 

ul.appendChild(li);
body.appendChild(ul);

