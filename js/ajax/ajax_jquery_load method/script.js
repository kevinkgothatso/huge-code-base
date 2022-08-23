
// var data ={
//         "Name":"John",
//         "Surname": "Snow",
//         "Salary": 19000
// }

//Chrome COR error resolved by locally hosting site, rather than just opening html on chrome

//loads to the p tag 
$('p').load("./data.txt");

$(document).load("./data.txt", function(reponseText, statusText, xhr){
    console.log("Data: "+reponseText);
    console.log("Satus: "+statusText);});

console.log("");

$.get("./data.json", function(data, status){
    //async method
    console.log(data)
});