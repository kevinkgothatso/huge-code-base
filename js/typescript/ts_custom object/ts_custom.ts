import {other} from "./ts_other";

var jj = new other;
console.log(typeof(jj))
jj.show();

function custom_object(jj: other): void{
    console.log('=======================');
    console.log("We have officially passed a custom object: "+typeof(jj));
    jj.show();
}

custom_object(jj);