//NodeValue

var nS = document.getElementById("nS");
var textValue = nS.firstChild.nodeValue;
textValue = 'Updated';
nS.firstChild.nodeValue = textValue;



var  nT = document.getElementsByClassName('nT')[0
];

//getting nodevalue
var firstCh = nT.firstChild.firstChild.nodeValue;
var lastCh = nT.lastChild.nodeValue; //nodeValue

firstCh = "Updated";
lastCh = "Updated"

//updating nodevalue
nT.firstChild.firstChild.nodeValue = firstCh;
nT.lastChild.nodeValue = lastCh;

