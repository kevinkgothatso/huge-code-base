//Node Value
   var nodeList = document.getElementById('NodeList');
   nodeList.firstChild.nodeValue = "Nodelist Approved";

//innerText
var innerT =  document.getElementById('innerText');
console.log("innerText: "+innerT.innerText);
innerT.innerText = "innerText Approved";

//innerHtml
var innerH = document.getElementById('innerHtml');
console.log("innerHtml: "+innerH.innerHTML);
innerH.innerHTML = "innerHtml Approved";


//textContent
var textConten =  document.getElementById('textContent');
console.log("textContent: "+textConten.textContent);
textConten.textContent = "textContent Approved";