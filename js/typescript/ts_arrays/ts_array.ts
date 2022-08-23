//arrays in typescript

var socialMedia: string[] = ["Facebook", "Instagram","Twitter"];
console.log(socialMedia[0]);

var body = document.getElementsByTagName('body')[0];
var ul = document.createElement('ul');

socialMedia.forEach(function (value, i) {
    var li = document.createElement('li');
    li.innerText = value;

    ul.appendChild(li);
});

body.appendChild(ul);

//array constructor array
var numbersx: Array<number> = [45, 44,33,12,6];
console.log(numbersx[1]);

numbersx.forEach(function(element,index){
     console.log(index+" : ",element);
});