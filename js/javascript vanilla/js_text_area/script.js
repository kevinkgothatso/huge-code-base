

var allWords = 140;
var textarea = document.getElementById('textarea');
  var  typedWords = 0 ;

    var outer = document.getElementById('outer');
   

    textarea.addEventListener("keydown", function(){
        typedWords = textarea.value.length;

        if(typedWords <= 140){
            outer.innerHTML = allWords - typedWords;
        }
        if(typedWords === 140){
            alert("Words more than 140");
        }
    
    });