
//decorators are expirimental
function man(target: Function){
     target.prototype.man = function(): void{
          console.log("Thanks");
     }
}

@man
    class fruitsClass{
        constructor(){}
    }


var fruit: any = new fruitsClass();
   fruit.man();
