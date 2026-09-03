class Fruits {
    constructor(name){
        this.name = name;
    }
    static show(){
        console.log(this.name+" is too much tasty");
    }
    static jackfruit(){
       console.log("Jackfruit"); 
    }
}
let object = new Fruits("Mango");
object.show();


Fruits.jackfruit();