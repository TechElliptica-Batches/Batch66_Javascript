
// Object orieneted approach
// what is object?
// Pen -> color, width, height, weight, 
// functionality - write
// entity which have attribute + behaviour = objects
// Pen = PenBody + PenCap + Refill
// this pen object is combination of penbody, pencap and refill object

// name, age, weight, color, height
// talk , walk, run, stand, 

class Human{

    static country = "India";
    static count = 0;
    constructor(){
        this.name;
        this.age;
        Human.count = Human.count + 1;

    }

    talk(content){
        console.log(`${this.name} [${this.age}] : ${content}`);
    }
    static happyBirthDay(){
        this.age = this.age + 1;
    }
}
// Create object of this class
const h1 = new Human();
h1.name = "Vaibhav";
h1.age = 34;
console.log(h1.country);

const h2 = new Human();
h2.name = "Vinesh";
h2.age = 30;

const h3 = new Human();
h3.name = "Preeti";
h3.age = 26;

h1.talk("Hello");
h2.talk("hey guys. how r u?")
h3.talk("hello i am great");
Human.happyBirthDay();
h3.talk("Today is my bday");

console.log(Human.count);

