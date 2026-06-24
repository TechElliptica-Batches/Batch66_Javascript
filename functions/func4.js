
// function return another function


// service - 
// HOF

function multipliar(a){
    let f1 = function multiply(b){
        let cal = a * b;
        return cal;
    }
    return f1;
}

// closure - when one function keep value which is provided in another function

let double = multipliar(2);
let ret = double(40);
let triple = multipliar(10);
let tret = triple(40);

//let ret = tripleTheValue(30);
console.log(tret);




