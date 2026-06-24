
// console.log(a);
// let a = 10;
// {
//     {
//         let a = 10;
//     }
//     {
//         let b = 20;
//     }
// }


// TDZ - Temporal dead zone 
// let and const

// console.log(add(10,20));

// function add(a,b){
//     return a+b;
// }

//hositing 

// functions, var, let and const (only ref hoised nto the value)
// let , cosnt - temporal dead zone

// let b = 30;
// {
//     {
//         let b = 10;
//         console.log(b);
//     }   
//     {
//         console.log(b);  // 
//         let b = 40;
//         console.log(b);
//     }
// }

console.log("vaibhav");
var b = 10;
console.log(b);
let b = 20;
console.log(b);
