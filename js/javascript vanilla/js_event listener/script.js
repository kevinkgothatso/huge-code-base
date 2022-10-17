//Event Listeners


//with multiple functions
var ele = document.getElementById("eveListener");
name = "Lerato"; sName ="Motswale";


ele.addEventListener("click",function(){
       showName(name);
       showSurname(sName);
}, false);



function showName(name){
    console.log(name);
}

function showSurname(sName){
    console.log(sName);
}


//with one function
var ele2 = document.getElementById("eveListener2");
ele2.addEventListener('click', warning, false);

function warning(){
    alert('Warning');
}