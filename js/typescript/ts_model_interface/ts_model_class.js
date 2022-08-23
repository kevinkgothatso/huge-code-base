"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product() {
        this.products = [
            { id: 1, product_name: "Soap", product_category: "Toiletry" },
            { id: 1, product_name: "", product_category: "" },
            { id: 1, product_name: "", product_category: "" }
        ];
    }
    return Product;
}());
var consoleClass = /** @class */ (function () {
    function consoleClass(Product) {
        this.Product = Product;
        this.productId = this.Product.products[0].id;
    }
    consoleClass.prototype.log = function () {
        console.info(this.productId);
    };
    return consoleClass;
}());
//  var prod = new Product()
var prod = new Product();
console.log(prod.products[0].id);
var cons = new consoleClass(prod);
cons.log();
