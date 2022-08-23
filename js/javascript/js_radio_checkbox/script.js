

var form = document.getElementById('formName');
var el = form.elements; //gets elements in form

var check = el.Games;  //gets check boxes via its name

var radio = el.communication; //gets radio button via its name



  var radioCheckClass = document.getElementsByClassName('rad-com');


  for(var i=0; i < radioCheckClass.length; i++){
    radioCheckClass[i].addEventListener("change", sAdded);  //dont use foreach when dealing with a nodelist
  }


  var body = document.getElementsByTagName('body')[0];
  var radioText = document.createElement("p");
  radioText.setAttribute("class", 'red');
  body.appendChild(radioText);

  function sAdded(){
    for(var x=0; x < radioCheckClass.length; x++){
        if(radioCheckClass[x].checked){
            radioText.innerHTML = radioCheckClass[x].value;
            extraInfoCheckBox();
        }
     }
  }
   


  function extraInfoCheckBox(){
    if(check[0].checked && check[1].checked){
        console.log("Both have been checked");
    }else{
        console.log("only one option has been checked");
    }
  }