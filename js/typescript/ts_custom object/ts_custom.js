"use strict";
exports.__esModule = true;
var ts_other_1 = require("./ts_other");
var jj = new ts_other_1.other;
console.log(typeof (jj));
jj.show();
function custom_object(jj) {
    console.log('=======================');
    console.log("We have officially passed a custom object: " + typeof (jj));
    jj.show();
}
custom_object(jj);
