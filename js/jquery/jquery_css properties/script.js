//working with css properties in jquery

var bcolor = $('#idText').css('background-color');
console.log(bcolor);

$('#idText').css("background-color","red");
bcolor =  $('#idText').css('background-color');
console.log(bcolor);

//multiple css selections
var eveBtn = document.getElementsByTagName('input')[0];
eveBtn.addEventListener('click', cssProp,'false')

function cssProp(){
    $('#idText').css({'background-color':"orangered",
    "font-size":"22px",
    "color":"white"});
    
    alert("Changed");
}

