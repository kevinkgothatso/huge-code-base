//Jquery anjd Javascript code updating innerTex

var btn = document.getElementById("btn");
btn.addEventListener('click',changeText,false);

function changeText(){
    $('li').html("Updated");
}