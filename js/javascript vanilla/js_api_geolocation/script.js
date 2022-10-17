//geoloaction api

var code = (function(){
    
    if(navigator.geolocation){ //is geoloaction supported
         navigator.geolocation.getCurrentPosition(sucess, fail);
    }
  
}());

function sucess(position){
   console.log(position.coords.latitude);
   console.log( position.coords.longitude);

   var body = document.getElementsByTagName('body')[0];
   var div = document.createElement("div");
   div.innerHTML = " Latidtude: " +  position.coords.latitude +" Longitude: "+   position.coords.longitude;
   body.appendChild(div);
}

function fail(e){
    console.log("Failed to load location: "+e.code);
}