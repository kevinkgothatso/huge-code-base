//Accessing DOM
var h1 = document.getElementById('text').textContent;
console.log(h1);

function addText(){
    document.getElementById('text-h2').innerHTML = h1;
}

 function change_color(){
  document.getElementById('text').className =
  "text-cl";
  document.getElementById("text").innerHTML = "Ohh";
};
