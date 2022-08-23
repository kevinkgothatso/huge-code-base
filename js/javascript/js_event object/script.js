//Event Object methods and properties

var ele = document.getElementById("btn");

ele.addEventListener('click', show, false);

function show(e){
    var targetEle = e.target;
    console.log(targetEle);
}