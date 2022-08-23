
//retrieving data from an array of objects

var json_str = `{"Name":"Array of objects","Cars":[{"name":"ford", "model":"ranger", "year": 2020},
 {"name":"mecerdez", "model":"GLA", "year": 2022},
 {"name":"VW", "model":"polo GTI", "year": 2019}]}`;

var json_obj = JSON.parse(json_str);
console.log("Car Name: " + json_obj.Cars[0].name + " | Model: " + json_obj.Cars[0].model + " | Year: " + json_obj.Cars[0].year);


//retriveing data from object
var json_str_2 = '{"car": {"brand":"ford"}}';

var json_obj_2 = JSON.parse(json_str_2);
 console.log(json_obj_2.car);
 console.log(json_obj_2.car.brand);