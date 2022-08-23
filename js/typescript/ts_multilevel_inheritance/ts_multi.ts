//a class inheriting from a class
//then another child class inherits from a child class

class parentClass{
    greet():void{
        console.log("Hello from parent");
    }

    change(): string{
        return "By Parent";
    }
}

var parent_1 = new parentClass();
parent_1.greet();
console.log(parent_1.change());
console.log("");

///1st child class
//===========================================================================
class  fisrtChild extends parentClass{
     greet(): void {
         console.log("Hello from first child");
     }
}

 var fChild = new fisrtChild();
 fChild.greet();
 console.log("");

///1st child class
//===========================================================================
class secondChild extends fisrtChild{
    greet(): void {
        console.log("Hello by second child");
    }

    change(): string {
        return "By second child";
    }
}

var sChild = new secondChild();
sChild.greet();
console.log(sChild.change())