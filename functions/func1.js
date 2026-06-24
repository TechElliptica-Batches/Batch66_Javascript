
// What is functions ?
// function = service
// give some input -> input got process -> output 

// what + function 
// 2 values -> 1 out
// 

function add(a, b){
    let c = a + b;
    return c;
}

function substration(a, b){
    let c = a - b;
    return c;
}

function multiply(a,b){
    let c = a * b;
    return c ;
}

export function square(a){
   let c = multiply(a,a);
   return c;
}

export function areaOfCircle(radius){
    let area = multiply(3.14 , multiply(radius , radius));
    return area;
}



// let sqt = square(5);
// console.log(sqt);
// let sum = add(40,30);
// console.log(sum);

// one function = one resposibility
