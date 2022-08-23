 //obeject in arrays

 //same data objects
 var arrayObj;
 arrayObj =
 [{name: "Kevin", surname: "matseke",phone: 12314},
    {name: "mansio", surname: "June", phone: 8596598},
    {name: "Cashias", surname: "Season" , phone: 8596296}];
    
 
    var str  = arrayObj[2].name + " " +arrayObj[2].surname +" " + arrayObj[2].phone;
    console.log(str);

    var arrayObj_2 = 
    [{celebName: "Vusi T", money: 500},
    {  fruit: "apple", color: "Red", fruitId: 8596598}];

    console.log("Celeb Name: "+arrayObj_2[0].celebName +"  Fruit Name: "+ arrayObj_2[1].fruit);