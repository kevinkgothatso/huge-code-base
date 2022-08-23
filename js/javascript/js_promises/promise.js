   

    var the_promise = new Promise((resolve, reject)=>{
    
        if("x" === 2){
            resolve();
        }
        else{
            reject();
        }
    
    });

    the_promise.then(
        ()=>{
            //on sucess //resolve definition
            console.log("success");
        },
        ()=>{
            //on failure //reject definition
            console.log("Failure ");
        
        }
    ).catch(
         err => console.error(err)
         );


    