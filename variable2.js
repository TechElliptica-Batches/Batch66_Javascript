
// global implicit - global, redecleration
// var - global + function  ,redecleration
// let - blocked scope , variable , in same scope, cannot redeclear
// const - blocked scope,  constant, in same scope, cannot redeclear

// if parent is having any var or implicit global, then child block can have let variable
// if parent is having let , then child block cannot have var
// Hoisting 

let a = 10;
{
    a = 100;
    {
        let a = 10;
        console.log(a);
    }
    {
        let a = 20;
        console.log(a);
    }
    console.log(a);
}


// {
//     {
//         let b = 10;
//         b = 20;
//     }
//     {
//         console.log(b);
//     }
// }