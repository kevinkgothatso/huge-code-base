//named array
var json_str = '{"Colors":["red","blue","green"]}';
var json_obj = JSON.parse(json_str);

var color = json_obj.Colors[2];
console.log(json_obj);
console.log(color);

//anonyomous array
var json_str2 = '["Red","Blue","Green"]';
var color2 = JSON.parse(json_str2);
console.log(color2[1]);
console.log(color2);