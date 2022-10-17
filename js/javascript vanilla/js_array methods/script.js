

  var firstQ = ["January","February","March","April","May","june"];
  var secondQ = ["July","August","September","October", "November","December"]

  //foreach
   firstQ.forEach( (item)=>{
       console.log("====foreach:");
        console.log(item);
   });

   //indexOf
   console.log("====Index Of:")
  console.log( firstQ.indexOf("March"));

  //copyWithin
  console.log("====Copy Within");
  console.log( firstQ.copyWithin(0,3));
   

  //entries
  console.log("====Entries");
  var f = firstQ.entries();
  for(let x of f){
     console.log(x);
  }

  //find   //not working
  console.log("====Find");
  let find = firstQ.find( (month) =>{
     if(month == "January"){return "Jan";}
  });
  console.log(find);

  //Every 
  console.log("====every");
  console.log(secondQ.every((str)=>{
      if(str == "July"){
        return str;
      }
  }))


  //filter
console.log("===filter");
console.log( secondQ.filter((str)=>{
     if(str == "July"){
       return str;
     }
}))

//includes 
console.log("====includes");
console.log(secondQ.includes((str)=>{
     if(str == "December"){
        return str;
     }
}));


//map  //makes a copy and maps it
console.log("====Map");
var numbers = [34,45,67,200];
var numbersMapped = numbers.map((num)=>{
     return num*2;
 });

 numbersMapped.forEach((item)=>{
      console.log(item);
 });

//pop
console.log("====Pop");
   numbersMapped.pop();
   numbersMapped.forEach((item)=>{
      console.log(item);
   });

//slice
console.log("====slice");
var slice = numbers.slice(1,3);
slice.forEach((item)=>{
    console.log(item);
});


//splice
console.log("====splice");
firstQ.splice(0,4);

firstQ.forEach((item)=>{
    console.log(item);
  });

