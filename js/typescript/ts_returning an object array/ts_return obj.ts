interface model{
        id: number,
        name: string,
        surname: string
}

class namesNStuff{
    names: model[] = [
        {id:1, name:"Jon" ,surname: "Snow"},
        {id:2, name:"Camilla", surname: "Vargas"},
        {id:3 ,name:"Terrion", surname: "Targarian"}];
    
       getAllNames(): model[]{
               return this.names;
        }

        passNamesEdit(data: model){
            let index = data.id;
            this.names[index] = data;
            return  (this.names[index]);
        }

}

var obj = new namesNStuff();
  console.log(obj.getAllNames());

  console.log(obj.passNamesEdit({id:2,name:"Donovan",surname:"Tencent"}))

