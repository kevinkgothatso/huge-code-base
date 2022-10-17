
//Get todays date
var  currentDate = new Date();
console.log("Date today: "+ currentDate);

//set date on constructor
var set_date_const = new Date("2019,12,19 17:55:35");
console.log("Set Date with Constructor: "+set_date_const);


//set date with method
set_date_const.setDate(13);
set_date_const.setMonth(6);
console.log("Set Date using set Method: "+set_date_const);

