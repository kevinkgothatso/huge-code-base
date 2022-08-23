//event handlers


  function htmlEventFunct(){
       alert("HTML event clicked");
  }

  //Dom event
  var domEve = document.getElementById("domEvent");
  domEve.onclick = function(){
      alert('DOM event clicked');
  }

  //Dom event listner
  var listnerEve = document.getElementById("DomListener");
  listnerEve.addEventListener('click', function(){
      alert("Event listener clicked");
  },false);

  
