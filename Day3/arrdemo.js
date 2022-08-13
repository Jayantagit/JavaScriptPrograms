let num=[1,2,3,4,7,"Jayanta"];
for (let index = 0; index < num.length; index++) {
  console.log(num[index]);
    
}
console.log("============================");
num.push(200);
for (const i of num) {
    console.log(i);
}

num.pop();

num.forEach(e=>console.log(e));
console.log("============================");
let arr=[1,2,3];
console.log(arr.length);
arr.slice(1,700);
console.log(arr);
console.log("============================");
arr.forEach((x)=>
{
  console.log(x);

}
);