//Nodelist script


//tag name Nodelist
var tagName = document.getElementsByTagName('li');
 if(tagName.length > 0){
    console.log(tagName.item(1));
    tagName.item(1).textContent = "Recognised";
    tagName.item(2).innerHTML = "<div class='inner'>Recognised</div>";
 }

//class name Nodelist
 var className = document.getElementsByClassName('cName');
 if(className.length > 0){
    console.log(className[1]);
    className[1].innerHTML = "Recognised";
 }


 //query selector Nodelist
 var querySelector = document.querySelectorAll('div .qSelector');
 if(querySelector.length > 0){
    console.log(querySelector[1]);
    querySelector[1].innerText = "Recognised";
 }