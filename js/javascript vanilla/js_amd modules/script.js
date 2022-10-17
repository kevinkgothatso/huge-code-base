import {other,testing} from "./other_script.js";

var body = document.getElementsByTagName('body')[0];
var button = document.getElementById("btn");


button.addEventListener('click', ()=>{
    var para = document.createElement('p');
    para.innerHTML = `${other.name} ${other.sname}`;
    console.log(`${other.name} ${other.sname}`);
    console.log(`${testing}!!`);
    body.appendChild(para);
})


