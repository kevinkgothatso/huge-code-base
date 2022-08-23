
class something{
    dataMethod(){
        return {names: [] =[
            {id: 1, name:"Jon"},
            {id: 2, name:"Jane"},
            {id: 3, name:"Jonny"}]
        }
    }

    dataMethod_2(): any{
        var names = [
            {id: 1, name:"Jon"},
            {id: 2, name:"Jane"},
            {id: 3, name:"Jonny"}];

        return {names};
    }
}
    
var somethingx = new something();
    console.log(somethingx.dataMethod());
    console.log("index 0:"+somethingx.dataMethod().names[0].id+" "+somethingx.dataMethod().names[0].name);
    console.log();
    console.log(somethingx.dataMethod_2());
    console.log("index 0:"+somethingx.dataMethod_2().names[0].id+" "+somethingx.dataMethod_2().names[0].name);
    // console.log('Data:'+somethingx.dataMethod_2().names[0]); //only way to return fucntion level scope 
    //array is via curly brackets