
//Get todays date
var currentDate: Date = new Date();
console.log("Date today: "+ currentDate);

//set date on constructor
var set_date_const: Date = new Date("2019,12,19 17:55:35");
console.log("Set Date with Constructor: "+set_date_const);


//set date with method
set_date_const.setFullYear(2021,0,10)
set_date_const.setHours(12,14,55);
// set_date_const.getDay();
console.log("Set Date using set Method: "+set_date_const);

