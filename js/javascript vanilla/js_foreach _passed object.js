var myArray = [123, 15, 187, 32];

myArray.forEach(function (value, i) {
    console.log('%d: %s', i, value);
});


//another foreach fucntion
var genders = ['male','female','bi-sexaul', 'transgender'];

genders.forEach(function (gender,index){ //important to read documentation
    console.log("Gender: "+gender +" Indexed at: "+index);
});