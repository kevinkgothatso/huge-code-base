
var the_data;

$('input[type="button"]').on("click", function(){
     
     $.ajax({
         type: "GET",
         dataType: 'json',
         url: "./data.json",
         timeout: 2000,
         success: sucess_func,
         fail: fail_func
     }
     );
});

function sucess_func(url){
    console.log("Data was loaded");
    console.log(url);
    the_data = url;
    console.log(url.Name);
    
    var data = JSON.parse(url); //shows syntax error for now
    console.log(data.Name);
}

function fail_func(error){
    console.log("error: "+error.message);
    console.log("error: "+error.status);
}