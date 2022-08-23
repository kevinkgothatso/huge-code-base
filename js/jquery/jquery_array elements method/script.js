// eq() lt() lg() methods



var ele = $('li');
console.log(ele.text());

console.log(" ");

//no loop : each method
ele.each(function (){
    console.log($(this).text());
});

console.log(" ");

//with loop
var $eq = $('li');

for(var i = 0; i < 3; i++){
     console.log($eq.eq(i).text());
 }