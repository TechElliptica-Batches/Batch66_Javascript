
class Human1{
    #name = "vaibhav";

    constructor(name){
        this.#name = name;
    }

    printMyName(){
        console.log(this.#name);
    }
}
let h1 = new Human1("vaibhav");
h1.name = "Preeti";
h1.printMyName();


// access modifier
// public  - visible everywhere, default every variable is public 
// private - visible in class
// protected - inheritance 

