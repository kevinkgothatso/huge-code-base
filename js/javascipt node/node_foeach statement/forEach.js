//ading sum using array numbers
var numbers =[20,30,40,50,60];
 var sum =0;
   //item is a key word
   numbers.forEach(  addnum = (item) =>{
      sum += item;
   });

   console.log(sum);


   //adding 10 to each of the array
   var numbers2 =[5,3,4,7,13];

   //item is a key word
   numbers2.forEach( addnum = (item, i) =>{
    numbers2[i] = item+10;
   });

   console.log(numbers2[0]);