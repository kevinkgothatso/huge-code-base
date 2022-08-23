//Events


//event without optional parameters
var eve = $("input");

eve.on("click", function (){
    alert("Event Jquery Works")
});


//with optional paramters
str = "The Alert";

var eve_2 = $('button');
eve_2.on("click","",{str :"Success"},function(e){
    alert(e.data.str);
} );