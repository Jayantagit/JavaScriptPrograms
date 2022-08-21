var a=10//Can be redeclared and update
var a=20

console.log(a)

let b=20//Canot be redeclared but update
 b=67
 console.log(b)

 const c=10//Canot be redeclared and update
 //c=89
 console.log(c)
 for(var i=0;i<6;i++)
 {
    console.log(i);

 }
 console.log(i);

 for(let j=0;j<6;j++)//let and const whithin the block
 {
    console.log(j);

 }
 console.log(j);

 //const need to be intialized

