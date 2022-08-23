

function propertyDecoratorSetGet(target: any, property: string){
       let value: any =  target[property];

       Object.defineProperty(target,property,{
           get :()=>{ return value;},
           set:(newValue)=>{
                value = newValue;
                console.log(value);
          }
        });
    //there is define propety and define propetties, use define property
}

class the_classx{
    @propertyDecoratorSetGet
    value: number = 100;
}

var  tc = new the_classx();
tc.value = 90;
