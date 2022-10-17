
var scoping = (function(){
    

    try {
       console.log(vname);

    } catch (error) {
        console.log("Error: "+error.message);
    }
    // finally{
    //    let name = "defined";
    //    console.log(name);
    // }

}());


var scoping_2= (function(){
    

    try {
       let sname;
       return sname;

    } 
    catch (error) {
        console.log("Error: "+error.message);
    }
    finally{
       console.log("Went to finally");
    }

}());