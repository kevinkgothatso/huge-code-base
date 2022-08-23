
//strigyfy anonymous function 
var arr = ["Rewad", "Uven","Postes"];
var arr_str = JSON.stringify(arr);
console.log(arr_str);
console.log("Name at Index 1: "+arr[0]);

console.log("");

//strigfy named array with empty spaced name
var arr2 = {'people-names':["Julias", "Sizwe", "Luks"]};  //javascript object
var arr_str2 = JSON.stringify(arr2);
console.log(arr_str2);
console.log(arr2["people-names"]);
console.log("Name at Index 1: "+arr2['people-names'][0]);