import {IProduct} from "./ts_model";

class Product implements IProduct {

      id:1; product_name: ""; product_category:"";

      names:{
        id:1, product_name: "", product_category:""
    }

       products: IProduct[]=[
           {id:1, product_name: "Soap", product_category:"Toiletry"},
           {id:1, product_name: "", product_category:""},
           {id:1, product_name: "", product_category:""}
        ];
       

      
}




class consoleClass{
    productId: any;

    constructor(private Product: Product){
       this.productId = this.Product.products[0].id; 
    }

    log(): void{
        console.info(this.productId);
    }

}

 
    //  var prod = new Product()
    var prod;
    console.log( prod.products[0].id);
var cons = new consoleClass(prod = new Product());
cons.log();