//await is to handle sync issue
//async-Parallel  abd promise
/*
new Promise((resolve,reject)=>{

    resolve("")

})*/

let f3=function() {
   return  console.log("f3");
}

let f1=function() {

    return new Promise(function(resolve,reject){

        setTimeout(() => {
            resolve("f1")
            console.log("f1");
        }, 8000);
    
    });

      
}

let f2=function() {

    return  console.log("f2");
    
}

let callFunction= async function() {

    let f33=f3();
    //console.log("f3")

    let f11= await f1();
   // console.log("Inside f1")

    
    let f22= f2();
  //  console.log("f2")

    
}

callFunction()