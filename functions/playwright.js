
function click(element){
    let p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(element + " clicked");
            resolve(element + " clicked");
        }, 4000);
    })
    return p1;
}

function enterData(element, testdata){
    let p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log(element + " with "+ testdata+ " entered");
        resolve(element + " with "+ testdata+ " entered");
    }, 2000);
    })
    return p1;
    
}
// Step 1 - click on sign in button
// Step 2 - enter username in username box
// Step 3 - enter password in password box
// Step 4 - click on login button

// promises - i will for sure give you one result
// fulfilled, rejected, pending 

// await - i am pausing execution until this mehtod will not return me a promise
// await - function must return promise. if function not returning a promise. 
// what evry that function is return it will be enclosed in a prmise object
// await always use inside a function. that function must be async in nature


async function testcase1(){
    await click("sign in button");
    await enterData("username", "preeti");
    await enterData("password", "password");
    await click("login button");
}


click("sign in button").then((msg)=>{
    console.log(msg);
    return enterData("username", "preeti");
}).then((msg) =>{
    console.log(msg);
    return enterData("password", "password");
}).then((msg) =>{
    console.log(msg);
    return click("login button");
}).then((msg) =>{
    console.log(msg);
}).catch((err)=>{
    console.log("Error : " +err);
})






