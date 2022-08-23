
//local storage
localStorage.age = 78;
localStorage.name = 'james';
localStorage.setItem('fruit', "Mango");

console.log('Local-storage: ');
console.log('Name: ' + localStorage.name);
console.log('Fruit ' + localStorage.getItem('fruit'));


//session storage
sessionStorage.vegie = "Onion";
console.log(sessionStorage.getItem('vegie'));
console.log("Number of items: "+ sessionStorage.length);

var ele = document.getElementById("i_div");
ele.innerHTML = "Age: "+ localStorage.age;