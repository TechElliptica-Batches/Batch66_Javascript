
// fullfilled (resolve, success) - then
// rejected -                     catch
// pending 

let p1 = new Promise((a,b) =>{
    console.log("Hello I am a promise");
    b("i am your failure msg");
});


p1.then((msg) => {
    console.log("then block ----  " +msg);
}).catch((err) =>{
    console.log("catch block ---- " + err)
}).finally(()=>{
    console.log("finally block ---- i will execute always" )
})


