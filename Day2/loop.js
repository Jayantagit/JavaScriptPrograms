for (let index = 0; index < 10; index++) {
    console.log(index);
}

console.log("============================");

const myArry = [1, 2, 3, 5];

myArry.forEach(myfunc);

function myfunc(item)
{
    console.log(item);
}
let sum = 0;
myArry.forEach(item => {

    sum += item;
    
});

console.log(sum);
console.log("============================");

for (let index = 0; index < myArry.length; index++) {
    const val = myArry[index];
    console.log(val);

}