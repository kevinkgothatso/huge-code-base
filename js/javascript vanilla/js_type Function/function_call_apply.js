var studies ={
    book: "Angular book",
    didReadBook: function(){
        return ("I read the "+this.book);
    }
}


var something = function(otherBook){
        console.log(this.didReadBook()+ " plus the other book "+otherBook );
        console.log("Old book was: "+ this.book);
}
var something2 = function(){
    this.book = "React",
    console.log(this.didReadBook());
}

var something3 = function(studies){
    console.log("Passed without *this :"+this.book);
} //reults are undifined

something.call(studies,"Typescript")
something.apply(studies,['Javascript']);

something2.call(studies);

something3(studies);