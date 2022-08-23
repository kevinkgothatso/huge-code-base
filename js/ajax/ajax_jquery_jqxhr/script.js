 
//get the data 

 $.getJSON("https://jsonplaceholder.typicode.com/posts/1").done(function(data, textStatus, jqXHR){
   console.log("Succesful loading data");
   console.log(jqXHR.responseText);
   console.log(textStatus);
 }).fail(function(){
     console.log("Failuire loading data");
 });