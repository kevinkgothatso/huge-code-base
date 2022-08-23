
  var heroData: any=  [{id:1, name: "superman",location: "NY"},
  {id:2, name: "Venom",location: "CAL"},
  {id:3, name: "Loki",location: "ASG"}];

  
   console.log("Old: " +heroData[2].id+" "+heroData[2].name+" "+heroData[2].location);

    //updating the data 
    heroData[2] = {id:3, name: "Jonny-Bravo" ,location: "PTA"};
   console.log("Updated: " +heroData[2].id+" "+heroData[2].name +" "+heroData[2].location);