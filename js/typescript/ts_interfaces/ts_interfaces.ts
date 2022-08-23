
interface IBeing{   //interface
    life_score: number;
    name: string;

    greet():void;
    showData(): string;
}

class android implements IBeing{
    life_score: number;
    name: string;

   constructor(){
    this.life_score = 5;this.name = "Andriod";
   }

    greet():void{ console.log("Hello from "+this.name);}

    showData(): string{ return (this.name +" "+this.life_score); }

    info():void{    console.log("Andriods are synthetic");}
}

var and = new android();
and.greet();
and.info();
console.log(and.showData());
console.log("");

//================================================================//


class human implements IBeing{
    life_score: number;
    name: string;

    constructor(){
        this.life_score = 10;this.name = "Human";
       }

    greet():void{ console.log("Hello from "+this.name);}

    showData(): string{ return (this.name +" "+this.life_score);}

    special(): void{console.log("Humans give birth");}

}

var hum = new human();
hum.greet();
hum.special;
console.log(hum.showData());
//you can only extend an iterface to an interface
//uses word implements