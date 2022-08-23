

function propertyDecorator(target: Object, propertyDecorated: string){
    //recognizes it by its signatures
   console.log("Property Name : "+propertyDecorated);
}

class the_class{
    @propertyDecorator
    name: string;
}

